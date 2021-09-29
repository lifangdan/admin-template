import axios from "axios";
import router from "../router";
import { Message } from "element-ui";
import { getCookie, removeCookie } from "@/utils/auth";

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // api的base_url
  timeout: 8000, // 请求超时时间
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  }
});

//request拦截器
service.interceptors.request.use(
  config => {
    if (getCookie("token")) {
      config.headers["ManageUserAccessToken"] = getCookie("token"); // 让每个请求携带自定义token
      config.headers["X-Token"] = getCookie("token"); // 让每个请求携带自定义token
    }
    if (localStorage.getItem("loginToken")) {
      config.headers["token"] = localStorage.getItem("loginToken"); // 登录接口需要传token
    }
    return config;
  }, error => {
    console.log(error);
    Promise.reject();
  }
);

//respone拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      if (response.data.success === true) {
        return Promise.resolve(response.data);
      } else {
        const code = response.data.reslutCode;
        const msg = response.data.msg;
        switch (code) {
          // 1000: token过期
          case 1000:
            router.replace({
              path: "/login"
            });
            Message({
              type: "error",
              message: msg
            });
            removeCookie("token");//清除token
            sessionStorage.removeItem("store");//清除缓存vuex里的信息
            this.$store.dispatch("GetUserInfo", null);//清除登录信息
            break;
          // 其他错误，直接抛出错误提示
          default:
            Message({
              type: "error",
              message: msg
            });
        }
        return Promise.reject(response.data);
      }
    } else {
      return Promise.reject(response);
    }

  }, error => {
    Message({
      type: "error",
      message: error.message
    });
  }
);

export default service;

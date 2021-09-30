import axios from 'axios';
import { Message } from 'element-ui';
import { getCookie } from '@/utils/auth';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // api的base_url
  timeout: 8000, // 请求超时时间
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json; charset=UTF-8',
  },
});

//request拦截器
service.interceptors.request.use(
  config => {
    if (getCookie()) {
      config.headers['X-Token'] = getCookie(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    if (localStorage.getItem('loginToken')) {
      config.headers['token'] = localStorage.getItem('loginToken'); // 登录接口需要传token
    }
    return config;
  }, error => {
    console.log(error); // for debug
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
        Message({
          type: 'error',
          message: response.data.msg,
        });
        return Promise.reject(response.data);
      }
    } else {

      return Promise.reject(response);
    }

  }, error => {
    Message({
      type: 'error',
      message: error.message,
    });
  }
);

export default service;

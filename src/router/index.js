import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/layout/layout";

Vue.use(VueRouter);

//解决3.0以上版本的router往同一地址跳转时会报错的情况
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const routes = [
  {
    path: "",
    component: Layout,
    name: "首页",
    redirect: "/home",
    meta: {
      title: "首页",
      icon: "el-icon-s-home"
    },
    children: [
      {
        path: "home",
        name: "首页",
        meta: {
          title: "首页",
          icon: "el-icon-s-home",
          noCache: true,
          sideBar: true
        },
        component: () => import("@/views/home/home")
      }
    ]
  },
  {
    path: "/table",
    component: Layout,
    name: "表格",
    meta: {
      title: "表格",
      icon: "el-icon-s-grid"
    },
    children: [
      {
        path: "table1",
        name: "表格1",
        meta: {
          title: "表格1",
          sideBar: true
        },
        component: () => import("@/views/table/table1")
      },
      {
        path: "table2",
        name: "表格2",
        meta: {
          title: "表格2",
          sideBar: true
        },
        component: () => import("@/views/table/table2")
      }
    ]
  },
  {
    path: "/form",
    component: Layout,
    name: "表单",
    meta: {
      title: "表单",
      icon: "el-icon-tickets"
    },
    children: [
      {
        path: "form",
        name: "表单",
        meta: {
          title: "表单",
          sideBar: true
        },
        component: () => import("@/views/form/index")
      }
    ]
  },
  {
    path: "/echart",
    component: Layout,
    name: "图表",
    meta: {
      title: "图表",
      icon: "el-icon-place"
    },
    children: [
      {
        path: "index",
        name: "ECharts地图",
        meta: {
          title: "ECharts地图",
          sideBar: true
        },
        component: () => import("@/views/echart/index")
      }
    ]
  },

  {
    path: "/login",
    name: "login",
    hidden: true,//不显示侧边栏的页面
    component: () => import("@/views/login/login")
  },
  {
    path: "/404",
    name: "404",
    hidden: true,
    component: () => import("@/views/error/404")
  },
  { path: "*", redirect: "/404", hidden: true }

];

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
});

export default router;

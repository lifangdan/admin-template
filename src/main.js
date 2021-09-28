import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import http from './api';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.scss';
import 'babel-polyfill';

Vue.prototype.$http = http;
Vue.use(Element,{ size: 'medium'});
Vue.config.productionTip = false;

import * as Utils from '@/utils'
window.utils = Utils

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

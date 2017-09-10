import Vue from 'vue'
import App from './App.vue'
import Router from './router/router'
import axios from 'axios'
import store from './store/store'
require('./static/css/reset.css');

// mock 数据  仅用于开发环境，在测试或者发布时应注掉
import mock from './mock/mock'


Vue.prototype.$http = axios


new Vue({
  el: '#app',
  router:Router,
  store:store,
  render: h => h(App)
})

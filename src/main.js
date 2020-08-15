/*
 * @Date: 2020-07-14 14:34:09
 * @LastEditors: kjs
 * @LastEditTime: 2020-08-15 11:19:45
 * @FilePath: \vue-h5-template\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import FastClick from 'fastclick';
import * as filters from './filters/';
import imgLazy from '@/directive/lazy'

import '@/util/rem.js'
import './styles/common.less'//全局常用样式
import baseUI from './components/lib'

Vue.use(baseUI)
FastClick.attach(document.body);
Vue.config.productionTip = false


if (process.env.NODE_ENV === 'development') {
  //设置为 true 以在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪
  Vue.config.performance = true
  //方便在模板中调试变量
  Vue.prototype.$logs = window.console.log;
  //移动设备调试
  const VConsole = require('vconsole')
  new VConsole()

}

// 注册过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.directive('lazy', imgLazy)


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

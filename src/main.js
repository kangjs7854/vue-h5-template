/*
 * @Date: 2020-07-14 14:34:09
 * @LastEditors: kjs
 * @LastEditTime: 2020-08-06 10:16:12
 * @FilePath: \vue-h5-template\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import FastClick from 'fastclick';
import * as filters from './filters/';
import { injectGlobal } from './util/index'
import imgLazy from '@/directive/lazy'

import './styles/common.less'//全局常用样式
import baseUI from './components/lib'

Vue.use(baseUI)
FastClick.attach(document.body);
Vue.config.productionTip = false

// 开发环境下面使用vConsole进行调试
if (process.env.NODE_ENV === 'development') {
  const VConsole = require('vconsole')
  new VConsole()
}

// 注册过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.directive('lazy', imgLazy)

injectGlobal(); //全局注入

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

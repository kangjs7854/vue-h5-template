import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import FastClick from 'fastclick';
import * as filters from './filters/';
// import './util/rem'

// import './styles/main.less';

FastClick.attach(document.body);
Vue.config.productionTip = false

// 注册过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

/*
 * @Date: 2020-07-14 14:34:09
 * @LastEditors: kjs
 * @LastEditTime: 2020-07-17 10:02:53
 * @FilePath: \vue-h5-template\src\util\http.js
 */

import axios from 'axios'
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
import CryptoJS from 'crypto-js';

let basePath = '/api/v1'
// 请求拦截
// axios.interceptors.request.use((config) => {
//   //....省略代码
//   config.headers.x_access_token = token
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })


// // 响应拦截
// axios.interceptors.response.use(function (response) {
//   if (response.data.code === 401) {//用户token失效
//     //清空用户信息
//     sessionStorage.user = ''
//     sessionStorage.token = ''
//     window.location.href = '/';//返回登录页
//     return Promise.reject(msg)//接口Promise返回错误状态，错误信息msg可有后端返回，也可以我们自己定义一个码--信息的关系。
//   }
//   if (response.status !== 200 || response.data.code !== 200) {//接口请求失败，具体根据实际情况判断
//     message.error(msg);//提示错误信息
//     return Promise.reject(msg)//接口Promise返回错误状态
//   }
//   return response
// }, function (error) {
//   if (axios.isCancel(error)) {
//     requestList.length = 0
//     // store.dispatch('changeGlobalState', {loading: false})
//     throw new axios.Cancel('cancel request')
//   } else {
//     message.error('网络请求失败,请重试')
//   }
//   return Promise.reject(error)
// })


// /*
// *url:请求的url
// *params:请求的参数
// *config:请求时的header信息
// *method:请求方法
// */

// const http = function ({ url, params, config, method }) {
//   // 如果是get请求 需要拼接参数
//   let str = ''
//   if (method === 'get' && params) {
//     Object.keys(params).forEach(item => {
//       str += `${item}=${params[item]}&`
//     })
//   }
//   return new Promise((resolve, reject) => {
//     axios[method](str ? (url + '?' + str.substring(0, str.length - 1)) : url, params, Object.assign({}, config)).then(response => {
//       resolve(response.data)
//     }, err => {
//       if (err.Cancel) {
//       } else {
//         reject(err)
//       }
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }


const post = (url, params = {}) => {
  const instance = axios.create({
    timeout: 1000 * 10,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  Object.assign(params, {
    userId: '',
    session_key: '',
    platform: '',
    timesamp: Date.parse(new Date()) / 1000 + ''
  })

  let reqUrl = url.includes("http") ? url : basePath + url

  return instance.post(reqUrl, qs.stringify(params)).then((res) => {
    if (!res.data || res.data.code == undefined) {
      // do sometings
    }
  }).catch((error) => {
    console.log('error', error);
  })

}

const get = (url, parms = {}, headers = {}) => {
  url += '?';
  for (let key in parms) {
    url += key + '=' + parms[key] + '&';
  }
  let option = Object.assign({}, headers);
  let instance = axios.create({
    timeout: 1000 * 10,
    headers: option
  });

  return instance.get(url).then((res) => {
    return res.data;
  }).catch(error => {
    console.log('error', error);
  });
}

export default () => {
  if (typeof window.$http == 'undefined') {
    window.$http = {
      post,
      get
    }
  }
}

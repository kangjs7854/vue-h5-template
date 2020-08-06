/*
 * @Date: 2020-07-14 14:34:09
 * @LastEditors: kjs
 * @LastEditTime: 2020-08-06 10:11:49
 * @FilePath: \vue-h5-template\src\util\http.js
 */

import axios from 'axios'
import qs from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
import CryptoJS from 'crypto-js';

let basePath = '/api/v1'

/**
 * post请求封装
 * @param {String} url 请求路径 
 * @param {Object} params 请求参数
 */
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
    timesamp: Date.parse(new Date()) / 1000 + ''//时间戳
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

/**
 * get请求
 * @param {String} url 
 * @param {Object} parms 
 * @param {Object} headers 
 */
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

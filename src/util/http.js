/*
 * @Date: 2020-07-14 14:34:09
 * @LastEditors: kjs
 * @LastEditTime: 2020-08-13 18:52:18
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
  //时间戳
  const requestTimestamp = new Date().getTime();
  //唯一的id
  const requestId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  })
  //生成签名
  const paramsArr = Object.keys(params)
  let signStr = ''
  //ASCII排序参数
  paramsArr.sort()
  paramsArr.forEach(el => {
    signStr += `${el}=${params[el] || ''}&`
  })
  const key = '' //与服务端协商好的key
  //最掉最后一个参数的&
  signStr = signStr.slice(0, -1) + key
  const sign = CryptoJS.md5(signStr).toString().toUpperCase()

  const instance = axios.create({
    timeout: 1000 * 10,
    headers: {
      'Content-Type': 'application/json',
      requestId,
      requestTimestamp,
      sign
    }
  })

  let reqUrl = url.includes("http") ? url : basePath + url

  return instance.post(reqUrl, qs.stringify(params)).then((res) => {
    if (!res.data || res.data.code == undefined) {
      // do sometings

    }
    return res.data
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

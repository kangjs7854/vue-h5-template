/*
 * @Date: 2020-07-14 14:34:09
 * @LastEditors: kjs
 * @LastEditTime: 2020-08-15 11:54:34
 * @FilePath: \vue-h5-template\src\api\index.js
 */
import url from './urls'
import http from '@/util/http.js'
export default {
    getUserInfo(params = {}) {
        return http.post(url.getUerInfo, params)
    },
    getImgsInfo(params = {}) {
        return http.get(url.getImgsInfo, params)
    },
    //测试
    test(params = { name }) {
        return http.post(url.test, params)
    },
}
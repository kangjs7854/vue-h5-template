/*
 * @Date: 2020-07-14 14:34:09
 * @LastEditors: kjs
 * @LastEditTime: 2020-08-17 13:59:12
 * @FilePath: \vue-h5-template\src\api\index.js
 */
import url from './urls'
import Http from '@/util/http.js'
const http = new Http()
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
/*
 * @Date: 2020-07-20 10:21:49
 * @LastEditors: kjs
 * @LastEditTime: 2020-07-23 10:47:42
 * @FilePath: \vue-h5-template\src\util\index.js
 */ 
// 全局注入 
import './rem'
import injectHttp from './http'
import injectPerformance from './performance'

export const injectGlobal = () => {
	injectHttp();
	// injectPerformance();
}
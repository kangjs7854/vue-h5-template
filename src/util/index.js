// 全局注入 
import './rem'
import injectHttp from './http'
import injectPerformance from './performance'

export const injectGlobal = () => {
	injectHttp();
	injectPerformance();
}
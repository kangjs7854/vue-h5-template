// import {logFlag} from '@/config/env'
export default () => {
	window.onload = function() {
        var performance = window.performance;
        if (!performance) { return; }
        var timing = performance.timing;
        var startTime =timing.navigationStart; 
        var t_request = timing.responseEnd - timing.requestStart,//request请求耗时
            t_dom_load = timing.domContentLoadedEventStart - startTime,//首屏时间
            t_dom_ready = timing.domContentLoadedEventEnd - startTime, //用户可交互
            t_dom_parse = timing.domInteractive - timing.responseEnd,//解析dom耗时
            t_white = timing.responseStart - startTime,//白屏时间
            t_dns = timing.domainLookupEnd -timing.domainLookupStart,
            t_tcp = timing.connectEnd-timing.connectStart,
            t_onload = timing.loadEventStart-startTime;//总时长

        var performance_data = {
            "path_name":window.location.pathname,
            "path_host":window.location.hostname,
            "app_source":"web",
            "page_reqEnd": t_request,
            "page_dns":t_dns,
            "page_tcp":t_tcp,
            "page_tti": t_dom_load,
            "page_domReady": t_dom_ready,
            "page_ttfb": t_white,
            "page_loadend": t_onload,
            "page_dom_parse":t_dom_parse,
            "webp_support":-1,
            "package_name":logFlag.packageName
           
        }
        if(tool.isIosWeb()){
            performance_data.app_source ="ios"
        }
        if(tool.isAndroidWeb()){
            performance_data.app_source ="android"
        }
        if(tool.isYuedong()){
            performance_data.app_source ="yuedong"
        }
        performance_data.webp_support = tool.supportWebpFlag ? 1 : 0;
        var cmd_param = {
            user_id: tool.getYdUserKey('user_id') || 0,
            cmd: 'web_time_v3',
            data: JSON.stringify(performance_data)
        }
        let hosts = location.host;
        if((hosts.indexOf("localhost") > -1 || hosts.indexOf("test") > -1) && !logFlag.dev){
            return ;
        }
        tool.reportCmd(cmd_param);
    }
}

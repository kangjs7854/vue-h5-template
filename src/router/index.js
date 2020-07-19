
import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

const routes = [
    {
        path:"/",
        name:"home",
        component:()=>import("@/pages/home"),
        meta:{
            title:'首页',
            keepAlive:false,//是否缓存
            requireAuth:false//是否需要权限
        }
    },
    {
        path:"/about",
        name:"about",
        component:()=>import("@/pages/about"),
        meta:{
            title:'关于',
            keepAlive:false,//是否缓存
            requireAuth:false//是否需要权限
        }
    },
]

const router = new Router({
    mode:"hash",
    // mode:"history",
    routes
})

export default router
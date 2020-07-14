
import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

const routes = [
    {
        path:"/",
        name:"home",
        component:()=>import("../components/HelloWorld.vue"),
        meta:{
            title:'首页',
            keepAlive:false,//是否缓存
            requireAuth:false//是否需要权限
        }
    }
]

const router = new Router({
    mode:"hash",
    // mode:"history",
    routes
})

export default router
<!--
 * @Date: 2020-07-20 10:21:49
 * @LastEditors: kjs
 * @LastEditTime: 2020-08-15 11:56:16
 * @FilePath: \vue-h5-template\src\pages\about.vue
-->
<template>
    <div class="about container">
        <p class="center">关于页面</p>
        <div class="button" @click="$router.go(-1)">回到首页</div>
        <loading v-if="isShowLoding"></loading>
        <ul class="img-wrap center" >
            <li v-for="(item,index) in imgArr" :key="index">
                <img v-lazy="item" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import api from '@/api/index'
export default {
    name: "about",

    props: {},

    components: {},

    data() {
        return {
            isShowLoding: false,
            imgArr: [],
        };
    },

    created() {
        
    },

    mounted() {
        this.test()
    },

    methods: {
        async getImgsInfo(){
            const imgs = await api.getImgsInfo()
        },

        async test(){
            this.isShowLoding = true;
            const res = await api.test({name:'666'})
            this.isShowLoding = false;
        }




    },

    watch: {},

    computed: {},
};
</script>

<style lang="less" scoped>
.img-wrap{
    flex-direction: column;
    img{
        width: 2rem;
        height: 2rem;
    }
}
</style>
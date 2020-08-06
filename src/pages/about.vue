<!--
 * @Date: 2020-07-20 10:21:49
 * @LastEditors: kjs
 * @LastEditTime: 2020-08-06 10:15:19
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
export default {
    name: "about",

    props: {},

    components: {},

    data() {
        return {
            isShowLoding: false,
            imgArr: [
                "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg",
                "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2396395246,715775841&fm=26&gp=0.jpg",
                "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=224866248,765861809&fm=26&gp=0.jpg",
                "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2670715487,1547868437&fm=26&gp=0.jpg",
                "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2988957523,3295751190&fm=26&gp=0.jpg",
                "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2698110318,782174384&fm=26&gp=0.jpg",
                "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1102788601,953675482&fm=26&gp=0.jpg",
                "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg",
                "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2396395246,715775841&fm=26&gp=0.jpg",
                "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=224866248,765861809&fm=26&gp=0.jpg",
                "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2670715487,1547868437&fm=26&gp=0.jpg",
                "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2988957523,3295751190&fm=26&gp=0.jpg",
                "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2698110318,782174384&fm=26&gp=0.jpg",
                "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1102788601,953675482&fm=26&gp=0.jpg",
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2004055534,3969071219&fm=26&gp=0.jpg",
            ],
        };
    },

    created() {
        this.showLoad();
    },

    mounted() {},

    methods: {
        showLoad() {
            this.isShowLoding = true;
            setTimeout(() => {
                this.isShowLoding = false;
            }, 2000);
        },
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
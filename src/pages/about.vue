<template>
    <div class="about container">
        <p class="center">关于页面</p>
        <div class="button" @click="$router.go(-1)">回到首页</div>
        <loading v-if="isShowLoding"></loading>
    </div>
</template>

<script>
export default {
    name: "about",

    props: {},

    components: {},

    data() {
        return {
            isShowLoding : false
        };
    },

    created() {
        this.showLoad()
    },

    mounted() {},

    methods: {
        showLoad(){
            this.isShowLoding = true;
            setTimeout(()=>{
                this.isShowLoding = false;
            }, 2000)
        }
    },

    watch: {},

    computed: {}
};
</script>

<style lang="less" scoped>
</style>
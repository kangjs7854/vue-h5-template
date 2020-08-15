<!--
 * @Date: 2020-07-20 10:21:49
 * @LastEditors: kjs
 * @LastEditTime: 2020-08-15 09:56:35
 * @FilePath: \vue-h5-template\src\pages\home.vue
--> 
<template>
  <div class="home container ">
      <p class="center">首页</p>
      <div class="button" @click="goToAbout">
          跳转
      </div>
  </div>
</template>

<script>
export default {
    name:'home',

    props:{ 

    },
    
    components:{

    },

    data(){
        return {

        }
    },

    created(){

    },

    mounted(){

    },
   
    methods:{
        goToAbout(){
            this.toast("跳转")
            .then(()=>{
                this.$router.push("/about")
            })
        }
    },

    watch:{

    },

    computed:{

    }
}
</script>

<style lang="less" scoped>

</style>
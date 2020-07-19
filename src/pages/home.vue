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
            this.toast("跳转").then(()=>{
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
<template>
    <div class="loading-box">
        <div class="loadEffect">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Loading',
    data() {
        return {
            
        }
    },
    mounted: function () {

    },
    created: function () {
        
    }
}
</script>
<style scoped>
    .loading-box{
        position: fixed;
        left:50%;
        top: 50%;
        transform: translate(-50%,-50%);
        padding: 20px;
        width: 100px;
        height: 100px;
        background-color: rgba(0,0,0, 0.3);
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loadEffect{
        width: 60px;
        height: 60px;
        position: relative;
    }
    .loadEffect span{
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, .8);
        position: absolute;
        -webkit-animation: load 1.04s ease infinite;
    }
    @-webkit-keyframes load{
        0%{
            -webkit-transform: scale(1.2);
            opacity: 1;
        }
        100%{
            -webkit-transform: scale(.3);
            opacity: 0.5;
        }
    }
    .loadEffect span:nth-child(1){
        left: 0;
        top: 50%;
        margin-top:-5px;
        -webkit-animation-delay:0.13s;
    }
    .loadEffect span:nth-child(2){
        left: 7px;
        top: 7px;
        -webkit-animation-delay:0.26s;
    }
    .loadEffect span:nth-child(3){
        left: 50%;
        top: 0;
        margin-left: -5px;
        -webkit-animation-delay:0.39s;
    }
    .loadEffect span:nth-child(4){
        top: 7px;
        right:7px;
        -webkit-animation-delay:0.52s;
    }
    .loadEffect span:nth-child(5){
        right: 0;
        top: 50%;
        margin-top:-5px;
        -webkit-animation-delay:0.65s;
    }
    .loadEffect span:nth-child(6){
        right: 7px;
        bottom:7px;
        -webkit-animation-delay:0.78s;
    }
    .loadEffect span:nth-child(7){
        bottom: 0;
        left: 50%;
        margin-left: -5px;
        -webkit-animation-delay:0.91s;
    }
    .loadEffect span:nth-child(8){
        bottom: 7px;
        left: 7px;
        -webkit-animation-delay:1.04s;
    }
</style>

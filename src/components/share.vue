<template>
    <div ref="shareImgWrapper">
        <center>分享示例</center>
        <yd-button @click="toShareUrl" style="margin:0.2rem auto;">分享链接</yd-button>
        <yd-button @click="toShareImg" style="margin:0.2rem auto;">分享图片</yd-button>
        <yd-button @click="toShareBase64" style="margin:0.2rem auto;">分享base64图片</yd-button>
        <yd-button @click="toShareDom" style="margin:0.2rem auto;">分享dom</yd-button>
        <yd-button @click="toShareWechat" style="margin:0.2rem auto;">单渠道分享微信</yd-button>
        <yd-button @click="isVisibleUrl = true" style="margin:0.2rem auto;">分享链接（自定义面板）</yd-button>
        <yd-button @click="isVisibleImg = true" style="margin:0.2rem auto;">分享base64图片（自定义面板）</yd-button>
        <share-img-panel :visible="isVisibleImg" :shareObj="shareObj" :showList="[0, 1, 2, 3, 4]" :base64Img="base64Img" @close="isVisibleImg = false"></share-img-panel>
        <share-url-panel :visible="isVisibleUrl" :shareObj="shareObj" @close="isVisibleUrl = false"></share-url-panel>
    </div>
</template>

<script>
import * as YdShare from '@/common/share.js'
import html2canvas from 'html2canvas'

export default {
    data() {
        return {
            isVisibleImg: false,
            isVisibleUrl: false,
            showLoding: false,
            base64Img: 'data:image/jpeg;base64,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',
            shareObj: {
                shareTitle: '这是测试的分享链接啊',
                shareWxCircle: '哟吼吼吼',
                shareContent: "你看，我们分享成功啦啦啦啦啦！",
                shareIcon:"https://ssl-pubpic.51yund.com/857264683.jpg",
                shareUrl: 'https://sslwxsharecircle.51yund.com/vapps/cityActivity/'
            }
        }
    },
    mounted: function () {
        this.initShare();
    },
    created: function () {
        
    },
    methods: {
        initShare(){
            let shareObj = {
                shareTitle: '这是测试的分享链接啊',
                shareContent: "你看，我们分享成功啦啦啦啦啦！",
                shareIcon:"https://ssl-pubpic.51yund.com/857264683.jpg",
                shareUrl: 'https://sslwxsharecircle.51yund.com/vapps/cityActivity/'
            }
            YdShare.setSimpleShare(shareObj,()=>{
                console.log("分享成功之后的回调");
            });
        },
        toShareUrl(){
            YdShare.onShare()
        },
        toShareImg(){
            //等待完善
            let imgUrl = 'https://ssl-pubpic.51yund.com/888831610.jpg';
            let shareObj = {
                sharePicUrl: imgUrl
            }
            YdShare.setSimpleShare(shareObj,()=>{
                console.log("分享成功之后的回调");
            });
            YdShare.onShare()
        },

        toShareBase64 () {
            APP.middleFun('shareBitmap',{
                data:{
                    'base64Img': this.base64Img,
                },
                callback: () => {
                    this.toast("分享成功")
                }
            })
        },

        toShareDom () {
            this.toast('生成图片中...')
            html2canvas(this.$refs.shareImgWrapper, {
                useCORS: true,
                scale: 4,
                backgroundColor: 'transparent'
            }).then((canvas) => {
                let baseImg = canvas.toDataURL("image/png");
                APP.middleFun('shareBitmap', {
                    data: {
                        base64Img: baseImg,
                    },
                    callback: () => {
                        this.toast("分享成功")
                    }
                })                  
            })
        },

        toShareWechat () {
            let shareObj = {
                shareTitle: '这是测试的分享链接啊',
                shareContent: "你看，我们分享成功啦啦啦啦啦！",
                shareIcon:"https://ssl-pubpic.51yund.com/857264683.jpg",
                shareUrl: 'https://sslwxsharecircle.51yund.com/vapps/cityActivity/',
                sharePlatforom: 1,      // -2:右上角分享配置不调起分享面板 -1:分享面板 0:新浪微博 1:微信聊天 2:微信朋友圈 4:QQ聊天 5:QQ空间
                shareType: 0,           // 0:分享链接(icon title content url) 1:分享图片(QQ空间不支持 即使是分享图片的时候 也需要设置一套分享链接的素材)
            }
            YdShare.commonShare(shareObj,()=>{
                console.log("分享成功之后的回调");
            });
        }
    }
}
</script>
<template>
    <view class="contact">
        <image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595769427330&di=ba66a4267922b535b445f44655d855c6&imgtype=0&src=http%3A%2F%2Fsq.jintianxinxi.com%2Fjtnews%2Ftemplate%2Fdefault%2Fnews%2Fimages%2Fabout.png"></image>
    <view class="info">
        <view @click="getContact">联系我们: {{qq}}</view>
        <view>地址：陕西省西安市长安区XXXXXXXX  XXXX  XXXXXX</view> <!--108.92837752316282，34.17063498316578-->
    </view>
    <map scale="13"  show-compass=true :longitude="longitude" :latitude="latitude" :markers="markers"></map>
        </view>
        </template>

        <script>
    export default {
        name: "contact",
        data(){
           return {
               qq:'2814363536@qq.com',
               longitude:108.9283775,
               latitude:34.17063498,
               markers:[{
                   width:20,
                   height:20,
                   longitude:108.92837,
                   latitude:34.17063,
                   //iconPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595769427330&di=ba66a4267922b535b445f44655d855c6&imgtype=0&src=http%3A%2F%2Fsq.jintianxinxi.com%2Fjtnews%2Ftemplate%2Fdefault%2Fnews%2Fimages%2Fabout.png'
                   callout:{
                       content:'在这里',
                   }
               }]
           }
        },methods:{
            getContact(){
                uni.setClipboardData({
                    data:this.qq,
                    success: res=> {
                       this.$log("success");
                    }
                });

            }
        }
    }
</script>

<style lang="scss" scoped>
.contact{
    image{
        width: 750rpx;
        height: 350rpx;
    }
    .info{
        view{
            width: 100%;
            line-height: 70rpx;
            font-size: 36rpx;
            border-bottom: 1px solid #eeeeee;
            padding: 20rpx 10rpx;
        }
    }
    map{
        width: 100%;
        height: 750rpx;
    }
}
</style>
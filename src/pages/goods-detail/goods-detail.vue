<template>
    <view class="goodsDetail">
        <swiper indicator-dots>
            <swiper-item v-for="img in imgSrc">
                <image :src="img.src"></image>
            </swiper-item>
        </swiper>
        <view class="pics">
            <text>${{detail.sell_price}}</text>
            <text>${{detail.market_price}}</text>
        </view>
        <view class="title">
            {{detail.title}}
        </view>
        <view class="kucun">
            <view>货号：{{detail.goods_no}}</view>
            <view>库存：{{detail.stock_quantity}}</view>
        </view>
        <view class="desc">
            <view>详情介绍</view>
            <rich-text :nodes="desc.content"></rich-text>
        </view>
        <view class="good_nav">
            <uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
        </view>
        </view>
</template>

<script>
    import uniGoodsNav  from '../../compontents/uni-goods-nav/uni-goods-nav'
    export default {
        name: "goods-detail",
        components:{uniGoodsNav},
        data() {
            return {
                id: 0,
                imgSrc: [],
                detail:{},
                desc:{},
                options: [{
                    icon: 'headphones',
                    text: '客服'
                }, {
                    icon: 'shop',
                    text: '店铺',
                    info: 2,
                    infoBackgroundColor:'#007aff',
                    infoColor:"red"
                }, {
                    icon: 'cart',
                    text: '购物车',
                    info: 2
                }],
                buttonGroup: [{
                    text: '加入购物车',
                    backgroundColor: '#ff0000',
                    color: '#fff'
                },
                    {
                        text: '立即购买',
                        backgroundColor: '#ffa200',
                        color: '#fff'
                    }
                ]
            }
        },
        onLoad(options) {
            this.id = options.id
            this.getGoodsDetailImg()
            this.getGoodsDetail()
            this.getGoodsDetailDesc()
        },
        methods: {
       async   getGoodsDetailImg() {
                this.$myRequest({
                    url: '/api/getthumimages/' + this.id
                }).then(res => {
                    this.imgSrc = res.data.message
                })
            },
           //   /api/goods/getinfo/:id
            async   getGoodsDetail(){
                this.$myRequest({
                    url: '/api/goods/getinfo/' + this.id
                }).then(res => {
                    this.detail = res.data.message[0]
                })
            },
            // /api/goods/getdesc/87
            async    getGoodsDetailDesc(){
                this.$myRequest({
                    url: '/api/goods/getdesc/' + this.id
                }).then(res => {
                    this.desc = res.data.message[0]
                })
            },    onClick (e) {
                uni.showToast({
                    title: `点击${e.content.text}`,
                    icon: 'none'
                })
            },
            buttonClick (e) {
                console.log(e)
                this.options[2].info++
            }
        }
    }
</script>

<style lang="scss" scoped>
.goodsDetail{
    swiper{
        width: 750rpx;
        height: 600rpx;
        swiper-item{
            image{
                width: 100%;
                height: 600rpx;
            }
        }
    }
    .pics{
        margin: 20rpx;
        text{
            font-weight: bold;
            font-size: 38rpx;
            color: $shop-color;
        }
        text:nth-child(2){
            font-size: 28rpx;
            font-weight: lighter;
            text-decoration:line-through;
            color: #cccccc;
            margin-left: 30rpx;
        }
    }
    .title{
        padding: 0 20rpx 10rpx 20rpx;
        font-size: 36rpx;
        line-height: 50rpx;
        font-weight: bold;
        border-bottom: 4px #cccccc solid;
    }
    .kucun{
        padding: 20rpx;
        font-size:32rpx ;
        font-weight: lighter;
        border-bottom: 4px #cccccc solid;
        view:nth-child(2){
            margin-top: 20rpx;
        }
    }
    .desc{

        view{
            padding: 20rpx;
            font-size: 34rpx;
            border-bottom: 1px #cccccc solid;
        }
        rich-text{
            font-size: 30rpx;
        }
    }
    .good_nav{
        position: fixed;
        bottom: 0;
        width: 100%;
    }
}
</style>
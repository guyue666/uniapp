<template>
    <view class="goods_list">
        <view v-for="goods in hot_goods" class="goods-item" @click="goodsDetail(goods.id)">
            <image :src="goods.img_url"></image>
            <view class="price">
                <text>{{goods.sell_price}}</text>
                <text>{{goods.market_price}}</text>
            </view>
            <view class="name">{{goods.title}}</view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "goods-list",
        props: ['hot_goods'],
        methods:{
            goodsDetail(id){
                uni.navigateTo({
                    url:'/pages/goods-detail/goods-detail?id='+id
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .goods_list {
        padding: 0 15rpx;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .goods-item {
            background: #fff;
            width: 355rpx;
            margin: 10rpx 0;
            padding: 15rpx;
            box-sizing: border-box;

            image {
                width: 80%;
                height: 150px;
                display: block;
                margin: 0 auto;
            }

            .price {
                color: $shop-color;
                font-size: 36rpx;

                text:nth-child(2) {
                    color: #ccc;
                    font-size: 28rpx;
                    margin: 15rpx;
                    text-decoration: line-through;
                }
            }

            .name {
                font-size: 28rpx;
                line-height: 50rpx;
                margin-top: 10rpx;
                margin-bottom: 15rpx;
            }
        }
    }
</style>
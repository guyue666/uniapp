<template>
    <view class="search">
        <view class="searchItem" @click="getNew(item.id)"  v-for="item in newslist">
            <image :src="item.img_url"></image>
            <view class="itemInfo">
                <view>{{item.title}}</view>
                <view><!--formatDate全局过滤器-->
                    <text>发布时间：{{item.add_time|formatDate}}</text>
                    <text>浏览：{{item.click}}次</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "news-list",
        props:['newslist'],
        onLoad() {
        },
        methods: {
            getNew(newid){
                uni.navigateTo({
                    url:"/pages/news-detail/news-detail?id="+newid,
                    success:res=>{
                     //   this.$emit('newDetail',newid)
                    }
                })

            }
        }
    }
</script>

<style lang="scss" scoped>

    .search {
        .searchItem {
            display: flex;
            padding: 10rpx 20rpx;
            border-bottom: 1px solid $shop-color;

            image {
                max-width: 200rpx;
                min-width: 200rpx;
                height: 150rpx;
            }

            .itemInfo {
                margin-left: 15rpx;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                box-sizing: border-box;

                view {
                    line-height: 45rpx;
                    font-size: 32rpx;
                }

                view:nth-child(2) {
                    font-size: 22rpx;

                    text:nth-child(2) {
                        float: right;
                    }
                }
            }
        }
    }
</style>
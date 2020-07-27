<template>
    <view class="home">
        <swiper autoplay="true" indicator-dots="true">
            <swiper-item v-for="item in swipers">
                <image :src="item.img"></image>
            </swiper-item>
        </swiper>
        <!--导航区域-->
        <view class="nav">
            <view v-for="(nav,index) in navs" class="nav-item" :key="index" @click="navItemClick(nav.path)">
                <view :class="nav.icon"></view>
                <text>{{nav.title}}</text>
            </view>
        </view>
        <!--推荐商品-->
        <view class="hot_goods">
            <view class="tit">推荐商品</view>
            <goods-list :hot_goods="hot_goods"/>
        </view>
    </view>
</template>

<script>
    import goodsList from '../../compontents/goods-list/goods-list'
    export default {
        components: {"goods-list":goodsList},
        data() {
            return {
                title: 'Hello',
                swipers: [],
                hot_goods: [],
                navs: [
                    {
                        icon: 'iconfont icon-ziyuan',
                        title: '超市',
                        path: '/pages/goods/goods'
                    }, {
                        icon: 'iconfont icon-guanyuwomen',
                        title: '联系我们',
                        path: '/pages/contact/contact'
                    }, {
                        icon: 'iconfont icon-tupian',
                        title: '社区图片',
                        path: '/pages/pics/pics'
                    }, {
                        icon: 'iconfont icon-shipin',
                        title: '学习视频',
                        path: '/pages/videos/videos'
                    }

                ]
            }
        },
        onLoad() {
            this.getSwiper();
            this.getHot_goods();
        },
        methods: {
            async getSwiper() {
                this.$myRequest({
                    url: '/api/getlunbo',
                    methods: 'get'
                }).then(res => {
                    this.$log(res)
                    this.swipers = res.data.message;
                })
            },
            async getHot_goods() {
                this.$myRequest({
                    url: '/api/getgoods',
                    methods: 'get',
                    data: {pageindex: 1}
                }).then(res => {
                    /* if (res.data.message.length == 0) {
                        this.pageindex--;
                    }
                   for (let i = 0; i < res.data.message.length; i++) {
                        this.hot_goods.push(res.data.message[i])
                    }*/
                    this.hot_goods=res.data.message
                    this.$log(this.hot_goods)
                })
            },/*跳转导航*/
            navItemClick(url) {
                uni.navigateTo({
                    url: url
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        swiper {
            width: 750rpx;
            height: 350rpx;
            image {
                width: 100%;
                height: 100%;
            }
        }

        .nav {
            display: flex;
            margin-bottom: 15rpx;
            .nav-item {
                width: 25%;
                text-align: center;

                view {
                    width: 120rpx;
                    height: 120rpx;
                    background: #b50e03;
                    border-radius: 50%;
                    margin: 6px auto;
                    line-height: 120rpx;
                    color: #fff;
                    font-size: 50rpx;
                }
                text {
                    font-size: 30rpx;
                }
            }
        }

        .hot_goods {
            background: #eee;
            overflow: hidden;

            .tit {
                height: 50px;
                line-height: 50px;
                text-align: center;
                letter-spacing: 20px;
                color: $shop-color;
                background: #fff;
                margin: 7rpx 0;
            }
        }

    }

</style>

<template>
    <view class="goods-list">
        <goods-list :hot_goods="hot_goods" ></goods-list>
        <view class="over" v-if="loadPage">---没有数据了---</view>
    </view>

</template>

<script>
    import goodsList from '../../compontents/goods-list/goods-list'

    export default {
        name: "goods",
        data() {
            return {
                hot_goods: [],
                pageindex: 1,
                loadPage:false
            }
        },
        onLoad() {
            this.getHot_goods()
        },
        methods: {
            async getHot_goods(callback) {
                this.$myRequest({
                    url: '/api/getgoods',
                    methods: 'get',
                    data: {pageindex: this.pageindex}
                }).then(res => {
                    this.$log(res.data.message)
                    this.hot_goods=[...this.hot_goods,...res.data.message]
                    callback&&callback()
                    this.$log(this.hot_goods)
                    this.$log(this.pageindex)
                })
            },
            onPullDownRefresh() {
                /*  setTimeout(() => { }, 500 )*/
                this.pageindex = 1;
                this.hot_goods = [];
                this.getHot_goods(()=>{
                    uni.stopPullDownRefresh()
                });

            }

        },
        onReachBottom() {
            if(this.hot_goods.length<this.pageindex*10){
                this.loadPage=true
                return
            }
            this.pageindex++;
            this.getHot_goods()
        },
        components: {
            'goods-list': goodsList
        }
    }
</script>

<style lang="scss" scoped>
    .goods-list {
        background: #eee;
        overflow: hidden;
        .over{
            color: #c8c7cc;
            width: 100%;
            height: 50rpx;
            line-height: 50rpx;
            text-align: center;
            font-size: 30rpx;
        }
    }
</style>
<template>
    <view class="newDetail">
        <view class="title">{{detail.title}}</view>
        <view class="timeAndWatch">
            <text>发表时间： {{detail.add_time|formatDate}}</text>
            <text>浏览：{{detail.click}}</text>
        </view>
        <view class="article">
            <rich-text :nodes="detail.content"></rich-text>
        </view>
    </view>
</template>

<script>
    export default {
        name: "news-detail",
        data(){
            return {
                id:0,
                detail:[]
            }
        },
        filters: {
            formatDate: data => {
                let data_ = new Date(data)
                let year = data_.getFullYear();
                let month = data_.getMonth();
                let day = data_.getDay();
                return year + "-" + month.toString().padStart(2, 0) + "-" + day.toString().padStart(2, 0)
            }
        },
        onLoad(options) {
           this.id=options.id;
            this.newDetail()
        },

        methods: {
           async newDetail() {
                console.log(this.id + "--------")
                this.$myRequest({
                    url: "/api/getnew/"+this.id
                }).then(res => {
                    this.$log(res)
                    this.detail=res.data.message[0]
                })
            }

        }
    }
</script>

<style lang="scss" scoped>
    .newDetail {
        margin: 10rpx;
        .title {
            text-align: center;
            font-size: 34rpx;
            margin-bottom: 15rpx;
            font-weight: bold;
        }
        .timeAndWatch {
            font-size: 26rpx;
            justify-content: space-between;
            text:nth-child(2){
                float: right;
            }
        }
        .article{
            font-size: 30rpx;
            margin-top: 10rpx;
        }
    }
</style>
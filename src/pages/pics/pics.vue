<template>
    <view class="pics">
        <scroll-view class="imgcategory"  scroll-y="true">
            <view @click="imgcategoryClick(index,item.id)" v-for="(item,index) in imgcategories" :class="active===index?'active':''" :key="item.id">{{item.title}}</view>
        </scroll-view>

        <scroll-view  class="showimages" scroll-y="true">
            <view v-for="(item,index) in getimages">
                <image @click="showImg(item)" :src="item.img_url"></image>
                <view class="title">{{item.title}}</view>
            </view>
        </scroll-view>
    </view>
</template>

<script>
    export default {
        name: "pics",
        data(){
            return {
                active:0,
                imgcategories:[],
                getimages:[]
            }
        },
        onLoad(){
            this.getImgcategory()
        },
        methods:{
            getImgcategory(){
                this.$myRequest({
                    url:"/api/getimgcategory"
                }).then(res=>{
                    this.$log(res)
                    this.imgcategories=res.data.message;
                    this. imgcategoryClick(this.active,this.imgcategories[0].id)
                })
            },
            imgcategoryClick(index,id){
                this.active=index
                this.$log(id)
                this.$myRequest({
                    url:"/api/getimages/"+id
                }).then(res=>{
                    this.$log(res)
                    this.getimages=res.data.message;
                })
            },
            showImg(img){
               const urls=this.getimages.map(item=>{return item.img_url})
                uni.previewImage({
                    current:img.img_url, //当前图片地址
                    urls:urls, //图片链接列表
                    loop:true,
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pics {
        display: flex;
        height: 100%;

        .imgcategory {
            width: 25%;
            height: 100%;
            border-right: 1px solid #eeeeee;
            view {
                height: 120rpx;
                line-height: 120rpx;
                font-size: 38rpx;
                text-align: center;
                border-bottom: 1px solid #eeeeee;
            }
            .active{
                background: $shop-color;
                color: #fff;
            }
        }
        .showimages{
            width: 75%;
            height: 100%;;
            margin:10rpx;
            image{
                width: 100%;
                height: 350rpx;
                border-radius: 5px;
                justify-content:space-between;
            }
            .title{
                font-size: 32rpx;
                line-height: 20px;
                margin-bottom: 10rpx;
            }
        }
    }
</style>
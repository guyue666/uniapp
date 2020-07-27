<template>
    <news-list :newslist="newslist"/>
</template>

<script>
    import newsList from '../../compontents/news-list/news-list'

    export default {
        name: "search",
        components: {"news-list": newsList},
        data() {
            return {
                newslist: []
            }
        }, onLoad() {
            this.getnewslist()
        },
        methods: {
            ///api/getnewslist
            getnewslist() {
                this.$myRequest({
                    url: "/api/getnewslist"
                }).then(res => {
                    this.newslist = res.data.message;
                    this.$log(this.newslist)
                })
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>
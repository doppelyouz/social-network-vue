<template>
    <div class="home-page"> 
        <Banner /> 
        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <Feed :apiUrl="apiUrl"/>
                </div>
                <div class="col-md-3">
                    <PopularTags />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Feed from '@/components/Feed.vue';
    import PopularTags from '@/components/PopularTags.vue';
    import Banner from '@/components/Banner.vue';
    export default {
        name: 'AppGlobalFeed',
        components: {
            PopularTags,
            Feed,
            Banner
        },
        data() {
            return {
                apiUrl: '/articles'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
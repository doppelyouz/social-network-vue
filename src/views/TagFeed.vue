<template>
    <div class="home-page"> 
        <Banner /> 
        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <FeedToggler :tagName="tagName"/>
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
    import FeedToggler from '@/components/FeedToggler.vue';
    export default {
        name: 'AppTagFeed',
        components: {
            PopularTags,
            Feed,
            Banner,
            FeedToggler
        },
        computed: {
            tagName() {
                return this.$route.params.slug;
            },
            apiUrl() {
                return `/articles?tag=${this.tagName}`;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
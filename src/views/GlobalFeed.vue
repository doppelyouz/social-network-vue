<template>
    <div class="home-page"> 
        Banner 
        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <Feed :apiUrl="apiUrl"/>
                </div>
                <div class="col-md-3">
                    POPULAR TEXT
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Feed from '@/components/Feed.vue';
    export default {
        name: 'AppGlobalFeed',
        components: {
            Feed
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
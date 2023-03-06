<template>
    <div>
        <div v-if="isLoading">Loading...</div>
        <div v-if="error">Something bad happened</div>
        <div v-if="feed">
            <div class="article-preview" v-for="(article, index) in feed.articles" :key="index">
                <div class="article-meta">
                    <router-link :to="{name: 'profile', params: {slug: article?.author.username}}">
                        <img :src="article?.author.image" alt="authorImage">
                    </router-link>
                    <div class="info">
                        <router-link :to="{name: 'profile', params: {slug: article?.author.username}}" class="author">{{article?.author.username}}</router-link>
                        <span class="date">{{ article?.createdAt }}</span>
                    </div>
                    <div class="pull-xs-right">Add to favorites</div>
                </div>
                <router-link :to="{name: 'article', params: {slug: article?.author.username}}" class="preview-link">
                    <h1>{{ article?.title }}</h1>
                    <p>{{ article?.description }}</p>
                    <span>Read more...</span>
                    Tag list
                </router-link>
            </div>
            <AppPagination :total="total" :limit="limit" :currentPage="currentPage" :url="url" />
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { actionsTypes } from '@/store/modules/feed';
    import AppPagination from '@/components/Pagination';

    export default {
        name: 'AppFeed',
        props: {
            apiUrl: {
                type: String, 
                required: true
            }
        },
        data() {
            return {
                total: 500,
                limit: 10,
                currentPage: 5,
                url: '/'
            }
        },
        computed: {
            ...mapState({
                isLoading: state => state.feed.isLoading,
                feed: state => state.feed.data,
                error: state => state.feed.error,
            })
        },
        mounted() {
            this.$store.dispatch(actionsTypes.getFeed, {apiUrl: this.apiUrl})
        },
        components: {
            AppPagination
        }
    }
</script>

<style lang="scss" scoped>

</style>
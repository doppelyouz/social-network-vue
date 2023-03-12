<template>
    <div>
        <Loading v-if="isLoading" />
        <ErrorMessage v-if="error" />
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
            <AppPagination :total="feed.articlesCount" :limit="limit" :currentPage="currentPage" :url="baseUrl" />
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { actionsTypes } from '@/store/modules/feed';
    import AppPagination from '@/components/Pagination';
    import { limit } from '@/helpers/vars';
    import {stringify, parseUrl} from 'query-string'
    import Loading from './Loading.vue';
    import ErrorMessage from './ErrorMessage.vue';

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
                limit
            }
        },
        computed: {
            ...mapState({
                isLoading: state => state.feed.isLoading,
                feed: state => state.feed.data,
                error: state => state.feed.error,
            }),
            currentPage() {
                return Number(this.$route.query.page || "1")
            },
            baseUrl() {
                return this.$route.path
            },
            offset() {
                return this.currentPage * limit - limit;
            }
        },
        watch: {
            currentPage() {
                this.fetchFeed();
            }
        },
        mounted() {
            this.fetchFeed();
        },
        methods: {
            fetchFeed() {
                const parsedUrl = parseUrl(this.apiUrl)
                const stringifiedParams = stringify({
                    limit,
                    offset: this.offset,
                    ...parsedUrl.query
                })
                const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
                this.$store.dispatch(actionsTypes.getFeed, {apiUrl: apiUrlWithParams})
            }
        },
        components: {
            AppPagination,
            Loading,
            ErrorMessage
        }
    }
</script>

<style lang="scss" scoped>

</style>
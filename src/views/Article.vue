<template>
    <div class="article-page">
      <div class="banner">
        <div class="container" v-if="article">
          <h1>{{ article.title }}</h1>
          <div class="article-meta">
            <router-link
              :to="{name: 'profile', params: {slug: article.author.username}}"
            >
              <img :src="article.author.image" />
            </router-link>
            <div class="info">
              <router-link
                :to="{
                  name: 'profile',
                  params: {slug: article.author.username}
                }"
              >
                {{ article.author.username }}
              </router-link>
              <span class="date">{{ article.createdAt }}</span>
            </div>
            <span v-if="isAuthor">
              <router-link
                class="btn btn-outline-secondary btn-sm"
                :to="{name: 'editArticle', params: {slug: article.slug}}"
              >
                <i class="ion-edit" />
                Edit Article
              </router-link>
              <button class="btn btn-outline-danger btn-sm" @click="deleteArticle">
                <i class="ion-trash-a" />
                Delete Article
              </button>
            </span>
          </div>
        </div>
      </div>
      <div class="container page">
        <Loading v-if="isLoading" />
        <ErrorMessage v-if="isLoading" :message="error" />
        <div class="row article-content" v-if="article">
          <div class="col-xs-12">
            <div>
              <p>{{ article.body }}</p>
            </div>
            <TagList :tags="article.tagList" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import {mapState, mapGetters} from 'vuex'
  
  import { getterTypes as authGetterTypes} from '@/store/modules/auth'
  import { actionTypes as articleActionTypes} from '@/store/modules/article'
  import Loading from '@/components/Loading'
  import ErrorMessage from '@/components/ErrorMessage'
  import TagList from '../components/TagList.vue'
  
  export default {
    name: 'AppArticle',
    components: {
      Loading,
      ErrorMessage,
      TagList
    },
    methods: {
      deleteArticle() {
        this.$store.dispatch(articleActionTypes.deleteArticle, {
          slug: this.$route.params.slug
        })
          .then(() => {
            this.$router.push({name: 'globalFeed'})
          })
      }
    },
    computed: {
      ...mapState({
        isLoading: state => state.article.isLoading,
        article: state => state.article.data,
        error: state => state.article.error
      }),
      ...mapGetters({
        currentUser: authGetterTypes.currentUser
      }),
      isAuthor() {
        if(!this.currentUser || !this.article) {
          return false
        }
        return this.currentUser.username === this.article.author.username
      }
    },
    mounted() {
      this.$store.dispatch(articleActionTypes.getArticle, {
        slug: this.$route.params.slug
      })
    }
  }
  </script>
  
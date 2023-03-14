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
            <span>
              <router-link
                class="btn btn-outline-secondary btn-sm"
                :to="{name: 'editArticle', params: {slug: article.slug}}"
              >
                <i class="ion-edit" />
                Edit Article
              </router-link>
              <button class="btn btn-outline-danger btn-sm">
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
            TAG LIST IS HERE
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import {mapState} from 'vuex'
  
  import {actionTypes} from '@/store/modules/article'
  import Loading from '@/components/Loading'
  import ErrorMessage from '@/components/ErrorMessage'
  
  export default {
    name: 'AppArticle',
    components: {
      Loading,
      ErrorMessage
    },
    computed: {
      ...mapState({
        isLoading: state => state.article.isLoading,
        article: state => state.article.data,
        error: state => state.article.error
      })
    },
    mounted() {
      this.$store.dispatch(actionTypes.getArticle, {
        slug: this.$route.params.slug
      })
    }
  }
  </script>
  
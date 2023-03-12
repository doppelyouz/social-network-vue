<template>
    <div>
      <Loading v-if="isLoading" />
      <ErrorMessage v-if="error" />
      <div v-if="popularTags" class="sidebar">
        <p>Popular Tags:</p>
        <div class="tag-list">
          <router-link 
            class="tag-item"
            v-for="popularTag in popularTags"
            :key="popularTag"
            :to="{ name: 'tag', params: { slug: popularTag } }"
          >
          {{ popularTag }}
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  import { actionsTypes } from "@/store/modules/popularTags";
  import Loading from './Loading.vue';
  import ErrorMessage from './ErrorMessage.vue';
    
  export default {
    name: "AppPopularTags",
    computed: {
      ...mapState({
        isLoading: (state) => state.popularTags.isLoading,
        error: (state) => state.popularTags.error,
        popularTags: (state) => state.popularTags.data,
      }),
    },
    mounted() {
      this.$store.dispatch(actionsTypes.getPopularTags);
    },
    components: {
      Loading,
      ErrorMessage
    }
  };
  </script>
  
  <style scoped>
      .tag-list {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
      }
      .tag-item {
          background-color: #242425;
          color:white;
          padding: 5px 7px;
          border-radius: 10px;
      }
  </style>
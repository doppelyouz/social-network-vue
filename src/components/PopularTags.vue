<template>
  <div>
    <Loading v-if="isLoading" />
    <ErrorMessage v-if="error" />

    <div v-if="popularTags" class="sidebar">
      <p>Popular Tags</p>
      <div class="tag-list">
        <router-link
          v-for="popularTag in popularTags"
          :key="popularTag"
          :to="popularTag && {name: 'tag', params: {slug: popularTag}}"
          :class="[popularTag ? 'tag-default tag-pill' : '']"
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
</style>
<template>
  <div>
    <app-topbar />
    <router-view />
  </div>
</template>

<script>
  import AppTopbar from '@/components/Topbar.vue';
  import {actionsTypes} from '@/store/modules/auth';

  export default {
    name: 'App',
    components: {
      AppTopbar
    },
    mounted() {
      this.$store.dispatch(actionsTypes.getCurrentUser);
    }
  };
</script>

<style>
</style>

<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'globalFeed' }">
        doppelyouz
      </router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="navbar-brand" :to="{ name: 'globalFeed' }" active-class="active" exact>Home</router-link>
        </li>
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <router-link class="navbar-brand" :to="{ name: 'createArticle' }" active-class="active">
              <i class="ion-compose"></i> &nbsp; New Article
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand" :to="{ name: 'settings' }" active-class="active">
              <i class="ion-gear-a"></i> &nbsp; Settings
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand" :to="{
              name: 'profile',
              params: { slug: currentUser.username },
            }" active-class="active">
              <div class="user-info">
                <img :src="currentUser.image" class="user-pic" />
                &nbsp;
                <div class="username">{{ currentUser.username }}</div>
              </div>
            </router-link>
          </li>
        </template>
        <template v-if="isAnonymous">
          <li class="nav-item">
            <router-link class="navbar-brand" :to="{ name: 'login' }" active-class="active">
              <i class="ion-compose"></i> &nbsp; Sign In
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand" :to="{ name: 'register' }" active-class="active">
              <i class="ion-gear-a"></i> &nbsp; Sign Up
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { getterTypes } from "@/store/modules/auth";
export default {
  name: "AppTopbar",
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous,
    }),
  },
};
</script>

<style scoped>
.user-info {
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-pic {
  max-width: 40px;
  height: 40px;
  width: 100%;
  border-radius: 50%;
}
</style>

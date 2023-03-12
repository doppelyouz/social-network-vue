import { createRouter, createWebHashHistory } from 'vue-router'
import GlobalFeed from "@/views/GlobalFeed";
import Register from "@/views/Register";
import Login from '@/views/Login';

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/createArticle',
    name: 'createArticle'
  },
  {
    path: '/settings',
    name: 'settings'
  },
  {
    path: '/profile',
    name: 'profile'
  },
  {
    path: '/article',
    name: 'article'
  },
  {
    path: '/feed',
    name: 'yourFeed'
  },
  {
    path: '/articles',
    name: 'articles'
  },
  {
    path: '/articles/:slug',
    name: 'article'
  },
  {
    path: '/tag',
    name: 'tag'
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle'
  },
  {
    path: '/profiles/:slug',
    name: 'profile'
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'profileFavorites'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

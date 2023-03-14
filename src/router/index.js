import { createRouter, createWebHashHistory } from 'vue-router'
import GlobalFeed from "@/views/GlobalFeed";
import YourFeed from "@/views/YourFeed";
import TagFeed from "@/views/TagFeed";
import Register from "@/views/Register";
import Login from '@/views/Login';
import Article from '@/views/Article';

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
    path: '/settings',
    name: 'settings'
  },
  {
    path: '/profile',
    name: 'profile'
  },
  {
    path: '/articles/new',
    name: 'createArticle'
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component: YourFeed
  },
  {
    path: '/articles',
    name: 'articles'
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: Article
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: TagFeed
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

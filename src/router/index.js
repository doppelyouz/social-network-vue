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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

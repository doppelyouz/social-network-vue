import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/views/Home";
import Register from "@/views/Register";
import Login from '@/components/Login';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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

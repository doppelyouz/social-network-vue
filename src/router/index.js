import { createRouter, createWebHashHistory } from 'vue-router'
import Register from "@/views/Register";


const routes = [
  {
    path: '/',
    name: 'home',
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

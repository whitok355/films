import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/list.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/film/',
    name: 'Film',
    component: () => import('../components/film.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

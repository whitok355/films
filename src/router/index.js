import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/list-films.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie-card/',
    name: 'Film',
    component: () => import('../components/movie-card.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

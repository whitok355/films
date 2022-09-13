import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/list-films.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    name: 'Film',
    path: '/film-card/:id',
    component: () => import('../components/film-card.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

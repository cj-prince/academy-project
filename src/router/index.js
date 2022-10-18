import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Assessment from '../components/Assessment.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/assessment',
    name: 'Assessment',
    component: Assessment
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

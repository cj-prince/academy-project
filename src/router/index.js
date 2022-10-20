import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
   
    component: () => import('../views/signupView.vue')
  },
  {
    path: '/sigin',
    name: 'sigin',
   
    component: () => import('../views/siginView.vue')
  },
  {
    path: '/passwordreset',
    name: 'ForgotPdView',
   
    component: () => import('../views/ForgotPdView.vue')
  },
  {
    path: '/applicationform',
    name: 'ApplicationFormView',
   
    component: () => import('../views/ApplicationFormView')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

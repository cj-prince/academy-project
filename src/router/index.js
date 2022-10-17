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
   
    component: () => import(/* webpackChunkName: "about" */ '../views/signupView.vue')
  },
  {
    path: '/sigin',
    name: 'sigin',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/siginView.vue')
  },
  {
    path: '/ForgotPdView',
    name: 'ForgotPdView',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/ForgotPdView.vue')
  },
  {
    path: '/ApplicationFormView',
    name: 'ApplicationFormView',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/ApplicationFormView')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

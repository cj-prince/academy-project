import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Assessment from '../components/Assessment.vue'
import Dashboard from '../components/seconddashform.vue'
import Questions from '../components/Questions.vue'
import Final from '../components/Assessment-completed.vue'

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
  },
  {
    path: '/assessment',
    name: 'Assessment',
    component: Assessment
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Questions
  },
  {
    path: '/final',
    name: 'Final',
    component: Final
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

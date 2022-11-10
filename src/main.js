
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios'
import Toaster from "@meforma/vue-toaster"
import loadingState from './components/loadingState.vue'




createApp(App) .component('loadingState', loadingState)
.use(Toaster,{
  position: "top-right",
})
.use(store)
.use(router)
.mount('#app')


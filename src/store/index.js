import { createStore } from 'vuex'

export default createStore({
  state: {
    loading: false,
  },
  getters: {
  },
  mutations: {
     SET_LOADING(state, loadingState){
      state.loading = loadingState
    }
  },
  actions: {
  },
  modules: {
  }
})

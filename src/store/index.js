import Vue from 'vue'
import Vuex from 'vuex'
import basket from './modules/basket'
import catalog from './modules/catalog'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchQuery: '',
    alertType: '',
    alertText: '',
  },
  mutations: {
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    },
    setAlert(state, alert) {
      state.alertText = alert.text;
      state.alertType = alert.type;
    }
  },
  actions: {
    async search({ commit }, searchQuery) {
      commit('setSearchQuery', searchQuery)
    },
    async hideAlert({ commit }) {
      commit('setAlert', { type: '', text: '' })
    }
  },
  modules: {
    basket,
    catalog,
  },
  strict: process.env.NODE_ENV !== 'production',
})

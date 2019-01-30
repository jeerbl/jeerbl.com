import Vue from 'vue'
import Vuex from 'vuex'

import * as api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: null
  },
  getters: {
    projects: state => state.projects
  },
  mutations: {
    receiveProjects (state, { data }) {
      Vue.set(state, 'projects', data)
    }
  },
  actions: {
    getPortfolioList ({ commit }) {
      return api.getProjects()
      .then(({data}) => {
        commit('receiveProjects', { data })
        return data
      })
    }
  }
})

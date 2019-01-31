import Vue from 'vue'
import Vuex from 'vuex'

import * as api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: null,
    companies: null,
    skills: null
  },
  getters: {
    projects: state => state.projects,
    companies: state => state.companies,
    skills: state => state.skills
  },
  mutations: {
    receiveProjects (state, { data }) {
      Vue.set(state, 'projects', data)
    },
    receiveCompanies (state, { data }) {
      Vue.set(state, 'companies', data)
    },
    receiveSkills (state, { data }) {
      Vue.set(state, 'skills', data)
    }
  },
  actions: {
    getPortfolioList ({ commit }) {
      return api.getProjects()
      .then(({data}) => {
        commit('receiveProjects', { data })
        return data
      })
    },
    getCompanyList ({ commit }) {
      return api.getCompanies()
      .then(({data}) => {
        commit('receiveCompanies', { data })
        return data
      })
    },
    getSkillList ({ commit }) {
      return api.getSkills()
      .then(({data}) => {
        commit('receiveSkills', { data })
        return data
      })
    }
  }
})

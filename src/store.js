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
    skills: state => state.skills,
    about: state => state.about
  },
  mutations: {
    receiveProjects (state, { entries }) {
      Vue.set(state, 'projects', entries)
    },
    receiveCompanies (state, { entries }) {
      Vue.set(state, 'companies', entries)
    },
    receiveSkills (state, { entries }) {
      Vue.set(state, 'skills', entries)
    },
    receiveAbout (state, { data }) {
      Vue.set(state, 'about', data)
    }
  },
  actions: {
    getPortfolioList ({ commit }) {
      return api.getProjects()
        .then(({ data }) => {
          commit('receiveProjects', { ...data })
          return data
        })
    },
    getCompanyList ({ commit }) {
      return api.getCompanies()
        .then(({ data }) => {
          commit('receiveCompanies', { ...data })
          return data
        })
    },
    getSkillList ({ commit }) {
      return api.getSkills()
        .then(({ data }) => {
          commit('receiveSkills', { ...data })
          return data
        })
    },
    getAbout ({ commit }) {
      return api.getAbout()
        .then(({ data }) => {
          commit('receiveAbout', { data })
          return data
        })
    }
  }
})

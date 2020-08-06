import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    options: [],
    tags: [],
    cake: {}
  },
  mutations: {
    setOptions (state, payload) {
      state.options = payload
    },
    setTags (state, payload) {
      state.tags = payload
    },
    setCake (state, payload) {
      state.cake = payload
    }
  },
  actions: {
    setOptions ({ commit }, payload) {
      commit('setOptions', payload)

      const tags = payload.map(cake => cake.tags).flat()
      commit('setTags', tags)
    }
  },
  modules: {
  }
})

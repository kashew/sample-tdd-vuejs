import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  userProfile: null,
  auth: {
    isLoggedIn: false,
    accessToken: null
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store

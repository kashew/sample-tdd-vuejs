const mutations = {
  API_ERROR: (state, error) => {
    state.apiError = error
  },

  UPDATE_AUTH: (state, auth) => {
    state.auth = auth
  },

  CLEAR_ALL_DATA: state => {
    // Auth
    state.auth.isLoggedIn = false
    state.auth.accessToken = null
  },

  SET_PROFILE: (state, profile) => {
    state.userProfile = profile
  }
}

export default mutations

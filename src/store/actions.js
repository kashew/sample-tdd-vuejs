import profileService from '../api/profile'

const actions = {
  getProfile: (context) => {
    return profileService.get()
      .then(response => {
        context.commit('SET_PROFILE', response.body)
      }, error => {
        context.commit('API_ERROR', error)
      })
  }
}

export default actions

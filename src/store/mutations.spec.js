import mutations from './mutations'

describe('mutations', () => {
  describe('#API_ERROR', () => {
    let state = {
      apiError: null
    }

    let apiError = {
      message: 'Some Error',
      stack: 'Some Stack'
    }

    it('sets the state of the apiError object', () => {
      mutations.API_ERROR(state, apiError)

      expect(state.apiError).to.equal(apiError)
    })
  })

  describe('#CLEAR_ALL_DATA', () => {
    let state = {
      auth: {
        accessToken: 'Banana',
        isLoggedIn: true
      }
    }

    let clearedState = {
      auth: {
        accessToken: null,
        isLoggedIn: false
      }
    }

    it('clears the state of the auth object', () => {
      mutations.CLEAR_ALL_DATA(state)

      expect(state.auth.accessToken).to.equal(clearedState.auth.accessToken)
      expect(state.auth.isLoggedIn).to.equal(clearedState.auth.isLoggedIn)
    })
  })

  describe('#SET_PROFILE', () => {
    let state = {
      userProfile: null
    }

    let userProfile = { Name: 'Banana' }

    it('sets the state of the profile object', () => {
      mutations.SET_PROFILE(state, userProfile)

      expect(state.userProfile).to.equal(userProfile)
    })
  })

  describe('#UPDATE_AUTH', () => {
    let state = {
      auth: {
        accessToken: null,
        isLoggedIn: false
      }
    }

    let newAuth = {
      accessToken: 'OrangeToken',
      isLoggedIn: true
    }

    it('updates the state of the auth object', () => {
      mutations.UPDATE_AUTH(state, newAuth)

      expect(state.auth).to.equal(newAuth)
    })
  })
})

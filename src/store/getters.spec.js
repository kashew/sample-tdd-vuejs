import getters from './getters'

describe('getters', () => {
  describe('#userProfile', () => {
    let store = {
      userProfile: 'BANANA'
    }
    it('retrieves the user profile from the store', () => {
      expect(getters.userProfile(store)).to.equal(store.userProfile)
    })
  })
})

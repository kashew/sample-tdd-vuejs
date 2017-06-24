import actions from './actions'
import profileService from '../api/profile'

let context = describe

describe('#getProfile', () => {
  let vuexContext = { commit: (actionText, response) => {} }
  let profilePromise = null
  let profileServiceStub = null
  let profile = 'BANANA'

  before(() => {
    sinon.spy(vuexContext, 'commit')
  })

  context('when the user has a valid token', () => {
    before(() => {
      profilePromise = new Promise(resolve => {
        resolve({ body: profile })
      })

      profileServiceStub = sinon.stub(profileService, 'get', () => {
        return profilePromise
      })
    })

    after(() => {
      profileServiceStub.restore()
    })

    it('returns the current user profile', async () => {
      await actions.getProfile(vuexContext)

      expect(profileService.get).to.have.been.calledOnce
      expect(vuexContext.commit).to.have.been.calledWith('SET_PROFILE', profile)
    })
  })

  context('when the user has an invalid token', () => {
    let error = { status: 401 }

    before(() => {
      sinon.stub(profileService, 'get', () => {
        return new Promise((resolve, reject) => {
          reject(error)
        })
      })
    })

    after(() => {
      profileServiceStub.restore()
    })

    it('returns an unauthorized error', async () => {
      await actions.getProfile(vuexContext)

      expect(profileService.get).to.have.been.calledOnce
      expect(vuexContext.commit).to.have.been.calledWith('API_ERROR', error)
    })
  })
})

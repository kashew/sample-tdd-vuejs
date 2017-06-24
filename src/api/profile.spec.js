import Vue from 'vue'
import VueResource from 'vue-resource'
import ProfileService from './profile'

Vue.use(VueResource)

let context = describe

let routes = [
  {
    method: 'GET',
    url: process.env.BASE_API + 'google/profiles/current',
    body: 'BANANA RESPONSE',
    status: 200
  }
]

Vue.http.interceptors.unshift((request, next) => {
  let route = routes.find((item) => {
    return (request.method === item.method && request.url === item.url)
  })

  if (route) {
    next(
      request.respondWith(
        route.body,
        {status: route.status}
      )
    )
  } else {
    next(request.respondWith({status: 404, statusText: 'Not Found'}))
  }
})

describe('Profile API', () => {
  describe('#get', () => {
    context('when the user has a valid token', () => {
      context('and when the user does not provide an id', () => {
        it('returns the current user profile', async () => {
          let result = await ProfileService.get()

          expect(result.body).to.equal('BANANA RESPONSE')
        })
      })
    })

    context('when the user has an invalid token', () => {
      beforeEach(() => {
        routes[0].status = 401
      })

      it('returns an unauthorized status', async () => {
        let result = null

        try {
          result = await ProfileService.get()
        } catch (e) {
          result = e
        }

        expect(result.status).to.equal(401)
      })
    })
  })
})

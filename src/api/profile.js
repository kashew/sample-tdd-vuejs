import Vue from 'vue'

export default {
  get () {
    let apiEndpoint = 'google/profiles/current'

    return Vue.http.get(process.env.BASE_API + apiEndpoint)
      .then(
        (response) => Promise.resolve(response),
        (error) => Promise.reject(error))
  }
}

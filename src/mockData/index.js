export default {

  // basic mock
  ['GET */google/profiles/current'] (pathMatch, query, request) {
    let body = { username: 'BANANA' }
    return {
      body: body,
      status: 200,
      statusText: 'OK',
      headers: {},
      delay: 500
    }
  }
}

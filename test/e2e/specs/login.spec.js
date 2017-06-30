// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'User Login with Google Sign-In': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    given_the_user_is_on_the_login_page()
    when_the_user_clicks_on_the_sign_in_button()
    then_the_user_will_see_googles_sign_in_prompt()

    // Don't worry about OAuth.  Set state for Login and go from there.
    when_the_user_signs_in_with_a_google_account()
    then_the_user_is_redirected_to_the_dashboard()
    browser.end()

    function given_the_user_is_on_the_login_page() {
      browser.url(devServer + '/#/Login')
    }

    function when_the_user_clicks_on_the_sign_in_button() {
      browser.click('div.g-signin-button')
    }

    function then_the_user_will_see_googles_sign_in_prompt() {
      browser.window_handles((result) => {
        browser.expect(result.value.length).to.equal(2)
      })
    }

    function when_the_user_signs_in_with_a_google_account() {
      let profile = {
        getAuthResponse: () => {
          return { id_token: 'banana' }
        }
      }

      browser.triggerGoogleSigninSuccess('div.g-signin-button', profile)
    }

    function then_the_user_is_redirected_to_the_dashboard() {
      browser.waitForElementPresent('div.dashboard', 1000);
    }
  }
}

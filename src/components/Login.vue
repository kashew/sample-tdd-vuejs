<template>
  <div class="login">
    <g-signin-button :params="googleSignInParams"
                     @success="onSignInSuccess"
                     @error="onSignInError">
      Sign in with Google
    </g-signin-button>

    <div>{{ this.$store.state.auth }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      googleSignInParams: {
        client_id: '68497528850-e1voe2mm5cr81qs88oia8lpvappbg0r0.apps.googleusercontent.com'
      }
    }
  },
  computed: {
    ...mapGetters({
      profile: 'userProfile'
    })
  },
  methods: {
    ...mapActions([
      'getProfile'
    ]),
    onSignInSuccess (googleUser) {
      const auth = this.$store.state.auth
      auth.accessToken = googleUser.getAuthResponse().id_token
      auth.isLoggedIn = true

      this.$store.commit('UPDATE_AUTH', auth)
      this.getProfile().then(() => {
        this.$router.push('dashboard')
      })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  text-align: center;
}

.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
  <div class="xar-wrapper">
    <div class="vh100 vc">
      <div class="col-4">
        <div class="card">
            <img class="card-img-top" src="../../assets/logo.png" alt="Card image cap">
            <div class="card-body">
              <form class="form-signin">
                <h5 class="h3 mb-3 text-center sub-title">
                  Sign into your account
                </h5>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input v-model="email" type="email" class="form-control" placeholder="email">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input v-model="password" type="password" class="form-control" placeholder="password" required="">
                </div>
                <button @click="login" class="btn btn-primary btn-block">Sign in</button>
              </form>
            </div>
            <div class="card-body">
              <small>
                <a href="#" class="card-link float-left">Forgot password?</a>
                <a href="#" class="card-link float-right">Not registered yet?</a>
              </small>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Login',
  data () {
    return {
      email: 'info@pacnem.com',
      password: 'Xarcade123',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        let token = response.data.access_token
        this.$store.dispatch('setToken', token)
        this.$store.dispatch('setUser', this.parseJwt(token).user)
        this.$router.push('Wallet')
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    parseJwt (token) {
      var base64Url = token.split('.')[1]
      var base64 = base64Url.replace('-', '+').replace('_', '/')
      return JSON.parse(window.atob(base64))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

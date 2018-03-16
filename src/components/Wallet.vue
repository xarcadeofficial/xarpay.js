<template>
  <div class="xar-wrapper">
    <div class="vh100 vc">
      <div class="col-md-4">
        <div class="card">
            <div class="card-header">
              Xarcade Wallet
              <span class="float-right">
                <div class="btn-group">
                  <a class="dropdown-toggle cursor" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="text-muted"><small>Avl Bal</small></span> <span class="text-primary">300 XAR</span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
              </span>
            </div>
            <div class="card-body">
              <p>
                {{ $store.state.user.email }}
              </p>
              <hr>
              <button @click="login" class="btn btn-primary btn-block">Confirm and pay</button>
            </div>
          </div>
          <small class="float-right">
            <a class="text-info cursor" @click="logout">Cancel</a>
          </small>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wallet',
  data () {
    return {
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

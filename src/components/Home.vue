<template>
  <div class="xar-wrapper">
    <div class="vh100 vc">
      <span>
        <h2 class="title text-center">xarpay.js</h2>
        <p class="text-center">
          <router-link to="wallet">
              <button type="button" class="btn btn-lg btn-info float-none">
                Pay with <img height="30" src="../assets/xar-logo.png">
              </button>
          </router-link>
        </p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

.title{
  font-size: 4rem;
  font-weight: lighter;
  margin: 20px 0 60px 0;
}

.xar-wrapper{
  min-height: 100vh;
}

.vh100{
  height: 100vh;
}

.vc{
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>

<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.title{
  font-size: 4rem;
  font-weight: lighter;
  margin: 20px 0 60px 0;
}

.sub-title{
  font-size: 1.4rem;
  font-weight: normal;
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

.cursor{
  cursor: pointer;
}
</style>

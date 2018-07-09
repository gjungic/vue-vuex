<template>
  <div id="app">
    <div id="app-logo">
      <img src="./assets/logo.png">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app-logo {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>

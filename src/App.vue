<template>
  <div id="app">
    <Header></Header>
    <Landing></Landing>
    <router-view></router-view>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import { Header } from './components/Layout'
import { Landing } from './components/Landing'

export default {
  name: 'app',
  components: {
    Header,
    Landing,
  },
  data() {
    return {
      msg: 'UnderDevelopment',
    }
  },
}
</script>

<style>
body {
  margin: 0;
}
h1 {
  font-size: 2em;
  font-family: Roboto;
}

#app {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(0, 0, 0);
}
</style>

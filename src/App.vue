<template>
  <div id="app">
    <Header></Header>
    <div>
      <h1>{{ msg }}</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import { Header } from './components/Layout'

export default {
  name: 'app',
  components: {
    Header,
  },
  data() {
    return {
      msg: 'Hello from UnderDevelopment',
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-size: 2em;
  font-family: Roboto;
}
</style>

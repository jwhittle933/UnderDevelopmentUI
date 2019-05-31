<template>
  <div id="app">
    <Header></Header>
    <img class="bg-image" src="./assets/splash.jpg" />
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
}
.bg-image {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>

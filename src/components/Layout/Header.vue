<template>
  <div id="header" class="header">
    <div class="logo" @click="goHome" v-scroll="scroll">
      {{ headerText }}
    </div>
    <div class="user">
      <UserIcon></UserIcon>
    </div>
  </div>
</template>

<script>
import { UserIcon } from '../Shared'
import Menu from './Menu.vue'


export const Header = {
  name: 'Header',
  components: {
    Menu,
    UserIcon,
  },
  data() {
    return {
      headerText: '_D | under development',
    }
  },
  methods: {
    goHome: function() {
      this.$router.push('/')
    },
    scroll: function(evt, el) {
      if (window.scrollY > 150) {
        el.setAttribute('style', 'color: white')
      } else el.setAttribute('style', 'color: inherit')
    },
  },
}

export default Header
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  overflow: visible;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 2em;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.2s ease-in;
}
.header:hover {
  background-color: rgba(120, 120, 120, 0.4);
}
<<<<<<< HEAD
.nav {
  display: flex;
=======

.user {
>>>>>>> master
  padding-right: 2em;
}


.logo {
  position: fixed; 
  top: 4%;
  left: 40%;
  font-family: 'Nunito', sans-serif;
  font-size: 1.5em;
  cursor: pointer;
  color: inherit;
  transition: color 0.3s ease-in;
}
</style>

<template>
  <div class="header">
    <div class="nav">
      <MenuIcon></MenuIcon>
    </div>
    <div class="logo" @click="goHome">
      {{ headerText }}
    </div>
    <div class="user">
      <UserIcon></UserIcon>
    </div>
  </div>
</template>

<script>
import { MenuIcon } from '../Shared'
import { UserIcon } from '../Shared'

export const Header = {
  name: 'Header',
  components: {
    MenuIcon,
    UserIcon,
  },
  data() {
    return {
      headerText: 'Under Development',
    }
  },
  methods: {
    goHome: function() {
      this.$router.push('/')
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
.nav {
  padding-left: 2em;
}

.user {
  padding-right: 2em;
}

.logo {
  font-family: 'Nunito', sans-serif;
  font-size: 1.5em;
}
</style>

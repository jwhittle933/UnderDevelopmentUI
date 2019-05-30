<template>
  <div class="header">
    <div class="nav">
      <MenuIcon></MenuIcon>
      <Menu />
    </div>
    <div class="logo">{{ headerText }}</div>
    <div class="user">
      <UserIcon></UserIcon>
    </div>
  </div>
</template>

<script>
import { MenuIcon } from '../Shared'
import { UserIcon } from '../Shared'
import Menu from './Menu.vue'

export const Header = {
  name: 'Header',
  components: {
    MenuIcon,
    UserIcon,
    Menu,
  },
  data() {
    return {
      headerText: 'Under Development',
    }
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
  padding-top: 1em;
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

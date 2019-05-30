<template>
  <div class="header">
    <div class="nav">NavIcon</div>
    <div class="logo">{{ headerText }}</div>
    <div class="user">Login/Logout</div>
  </div>
</template>

<script>
export const Header = {
  name: 'Header',
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  maxheight: 2em;
  padding-top: 1em;
}
.nav {
  padding-left: 2em;
}

.user {
  padding-right: 2em;
}
</style>

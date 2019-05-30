<template>
  <svg class="menu-icon" viewBox="0 0 24 24">
    <path
      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
    />
  </svg>
</template>

<script>
export const MenuIcon = {
  name: 'MenuIcon',
  data() {
    return {
      hover: false,
    }
  },
}
export default MenuIcon
</script>

<style scoped>
.menu-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.menu-icon path {
  stroke-width: 2;
}
</style>

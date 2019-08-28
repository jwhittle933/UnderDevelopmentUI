<template>
  <svg
    viewBox="0 0 24 24"
    :class="{ icon: true, scale: hover }"
    :style="{
      stroke: color,
      'stroke-width': strokeWidth,
      width: iconWidth,
    }"
    @click="$emit('icon-clicked')"
    @mouseover="hover = true"
  >
    <path
      :style="{ fill: color }"
      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
    />
  </svg>
</template>

<script>
export const MenuIcon = {
  name: 'MenuIcon',
  props: ['color', 'strokeWidth', 'iconWidth'],
  data() {
    return {
      hover: false,
    }
  },
}
export default MenuIcon
</script>

<style scoped>
.scale {
  transform: scale(1.2);
}
</style>

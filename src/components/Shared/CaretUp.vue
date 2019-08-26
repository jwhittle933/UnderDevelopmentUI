<template>
  <svg
    :style="{
      stroke: color,
      'stroke-width': strokeWidth,
      width: iconWidth,
    }"
    viewBox="0 0 24 24"
    @click="$emit('icon-clicked')"
  >
    <path
      :style="{ fill: color }"
      d="M8.71 12.29L11.3 9.7c.39-.39 1.02-.39 1.41 0l2.59 2.59c.63.63.18 1.71-.71 1.71H9.41c-.89 0-1.33-1.08-.7-1.71z"
    />
  </svg>
</template>

<script>
export const CaretUp = {
  name: 'caretup',
  props: ['iconwidth', 'strokewidth', 'color'],
  data() {
    return {
      hover: false,
    }
  },
}

export default CaretUp
</script>

<style scoped></style>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :style="{ stroke: color, 'stroke-width': strokeWidth, width: iconWidth }"
    @click="fn"
  >
    <path
      :style="{ fill: color }"
      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
</template>

<script>
export const CreateIcon = {
  name: 'CreateIcon',
  props: ['iconWidth', 'strokeWidth', 'color', 'fn'],
  data() {
    return {
      hover: false,
    }
  },
}

export default CreateIcon
</script>

<style scoped></style>

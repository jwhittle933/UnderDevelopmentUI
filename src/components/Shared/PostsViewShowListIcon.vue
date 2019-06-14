<template>
  <svg
    viewBox="0 0 24 24"
    class="icon"
    :style="{ stroke: color, 'stroke-width': strokeWidth, width: iconWidth }"
    @click="$emit('icon-clicked')"
  >
    <path
      :style="{ fill: color }"
      d="M4 21h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-4h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-4h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-4h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 4c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
    />
  </svg>
</template>

<script>
export const PostsViewShowListIcon = {
  name: 'PostsViewShowTiles',
  props: ['iconWidth', 'strokeWidth', 'color'],
  data() {
    return {
      hover: false,
    }
  },
}

export default PostsViewShowListIcon
</script>

<style scoped>
.icon {
  cursor: pointer;
}
</style>

<template>
  <svg
    viewBox="0 0 24 24"
    class="icon"
    :style="{
      stroke: color,
      'stroke-width': strokeWidth,
      width: iconWidth,
      'box-shadow': active ? '0 8px 6px -6px #20303C' : '',
    }"
    @click="$emit('icon-clicked')"
  >
    <path
      :style="{ fill: color }"
      d="M13 7.5h5v2h-5zm0 7h5v2h-5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM11 6H6v5h5V6zm-1 4H7V7h3v3zm1 3H6v5h5v-5zm-1 4H7v-3h3v3z"
    />
  </svg>
</template>

<script>
export const PostsViewShowTileListIcon = {
  name: 'PostsViewShowTiles',
  props: ['iconWidth', 'strokeWidth', 'color', 'active'],
  data() {
    return {
      hover: false,
    }
  },
}

export default PostsViewShowTileListIcon
</script>

<style scoped></style>

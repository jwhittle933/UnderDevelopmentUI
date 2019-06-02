<template>
  <div class="top-posts-tile">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export const TopPostsTile = {
  name: 'TopPostsTile',
  props: ['id', 'title', 'body', 'visible', 'featured_image', 'user_id'],
}

export default TopPostsTile
</script>

<style scoped>
.top-posts-tile {
  border: 2px solid red;
  min-height: 12em;
  cursor: pointer;
}
</style>

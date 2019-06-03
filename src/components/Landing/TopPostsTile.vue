<template>
  <div class="top-posts-tile" @click="goToPost">
    <img src="https://picsum.photos/275/150" />
    <span>{{ title }}</span>
  </div>
</template>

<script>
export const TopPostsTile = {
  name: 'TopPostsTile',
  props: ['id', 'title', 'body', 'visible', 'featured_image', 'user_id'],
  methods: {
    goToPost: function() {
      this.$router.push(`/post/${this.id}`)
    },
  },
}

export default TopPostsTile
</script>

<style scoped>
.top-posts-tile {
  overflow: hidden;
  min-height: 12em;
  width: 275px;
  cursor: pointer;
  background-color: #d3d3d3;
  color: black;
  border-radius: 4px;
}
</style>

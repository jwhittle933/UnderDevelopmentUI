<template>
  <div class="post" @click="goToPost">
    <img src="https://picsum.photos/700/275" />
    <div class="tile-title">{{ post.title }}</div>
  </div>
</template>

<script>
export const PostTile = {
  name: 'PostTile',
  props: ['post'],
  methods: {
    goToPost: function() {
      this.$router.push(`/post/${this.post.id}`)
    },
  },
}

export default PostTile
</script>

<style scoped>
.post {
  width: 100%;
  height: 20em;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
}

.post:hover {
  border: 1px solid blue;
}

.tile-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  height: 1.5em;
}
</style>

<template>
  <div :class="classType" @click="goToPost">
    <img
      src="https://picsum.photos/700/275"
      v-if="displayType === 'tile' || displayType === 'tile-list'"
    />
    <div class="tile-title">{{ post.title }}</div>
  </div>
</template>

<script>
export const PostTile = {
  name: 'PostTile',
  props: ['post', 'displayType'],
  methods: {
    goToPost: function() {
      this.$router.push(`/post/${this.post.id}`)
    },
  },
  computed: {
    classType: function() {
      if (this.displayType === 'tile') return 'tile'
      if (this.displayType === 'list') return 'list'
      if (this.displayType === 'tile-list') return 'tile-list'
    },
  },
}

export default PostTile
</script>

<style scoped>
.tile {
  width: 100%;
  height: 20em;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
}

.tile:hover {
  border: 1px solid blue;
}

.list {
}

.tile-list {
  display: flex;
  position: relative;
  width: 100%;
  height: 6em;
  border: 1px solid #d3d3d3;
  overflow: hidden;
  margin: 0.5em 0;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.tile-list:hover {
  transform: scale(1.009, 1.009);
  box-shadow: -2px 4px 17px 0px rgba(0, 0, 0, 0.75);
}

.tile-list > img {
  width: 20em;
  overflow: hidden;
  margin-right: 1em;
}

.tile-list > .tile-title {
  font-size: 1.5em;
  color: white;
  position: absolute;
  left: 0.5em;
  top: 30%;
}

.tile-title {
  font-size: 1.3em;
  height: 1.5em;
}
</style>

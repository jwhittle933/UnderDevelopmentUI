<template>
  <div :class="classType" @click="goToPost">
    <img src="https://picsum.photos/700/275" v-if="displayType !== 'list'" />
    <div class="title">{{ post.title }}</div>
    <div class="name">{{ author.name }}</div>
    <div class="comments">{{ post.comments.length }} comments</div>
    <div class="date">{{ formatDate(post.inserted_at) }}</div>
  </div>
</template>

<script>
import { getAuthor } from '@/Utils/requests/mock'

export const PostTile = {
  name: 'PostTile',
  props: ['post', 'displayType'],
  data() {
    return {
      author: '',
      image: require('@/assets/splash.jpg'),
    }
  },
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
  mounted() {
    getAuthor(this.post.user_id).then(au => (this.author = au))
  },
}

export default PostTile
</script>

<style scoped>
.tile {
  position: relative;
  width: 100%;
  height: 20em;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
}

.tile > img {
  min-width: calc(1em + 15vw);
}

.tile > .title {
  font-size: 1.4em;
  color: white;
  position: absolute;
  bottom: 14%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.tile:hover {
  border: 1px solid blue;
}

.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #d3d3d3;
  border-left: 3px solid #d3d3d3;
  width: 88%;
  height: 2em;
  margin: 0 auto;
  padding-left: 1em;
  padding-right: 1em;
  cursor: pointer;
  transition: border 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.list > .title {
  font-size: 1em;
}

.list > .name {
  min-width: 8em;
  text-align: left;
}

.list:hover {
  border-left: 3px solid blue;
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
  transition-property: transform, box-shadow;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.tile-list:hover {
  transform: scale(1.009, 1.009);
  box-shadow: -2px 4px 17px 0px rgba(0, 0, 0, 0.75);
}

.tile-list > img {
  width: calc(1.2em + 19vw);
  overflow: hidden;
  margin-right: 1em;
}

.tile-list > .title {
  width: calc(1em + 19vw);
  font-size: calc(0.7em + 1vh);
  color: white;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
}

.tile-title {
  font-size: 1.3em;
  height: 1.5em;
}
</style>

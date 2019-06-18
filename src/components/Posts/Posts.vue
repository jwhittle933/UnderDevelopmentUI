<template>
  <div class="posts-view">
    <div
      class="posts-head"
      :style="{
        'background-image': 'url(' + image + ')',
      }"
    >
      <span class="head-text">All Posts</span>
      <div class="post-create">
        <CreateIcon
          :iconWidth="'24px'"
          :strokeWidth="'0'"
          :color="'#000'"
        ></CreateIcon>
      </div>
    </div>
    <PostsMenu
      :showPostMenu="showPostMenu"
      v-on:update:show-posts-menu="showPostMenu = !showPostMenu"
    ></PostsMenu>
    <div class="select-display-wrapper">
      <SelectPostsDisplay
        v-on:update:displayType="displayType = $event"
      ></SelectPostsDisplay>
    </div>
    <div :class="classType">
      <PostTile
        v-for="(post, i) in posts"
        :post="post"
        :displayType="displayType"
        :key="i"
      ></PostTile>
    </div>
  </div>
</template>

<script>
import { getAllPosts } from '@/Utils/requests/mock'
import { PostsMenu } from './PostsMenu'
import { CreateIcon } from '../Shared'
import { PostTile } from './PostTile'
import { SelectPostsDisplay } from './SelectPostsDisplay'

export const Posts = {
  name: 'PostsView',
  components: {
    PostsMenu,
    CreateIcon,
    PostTile,
    SelectPostsDisplay,
  },
  data() {
    return {
      posts: [],
      showPostMenu: false,
      image: require('@/assets/all_posts.jpg'),
    }
  },
  computed: {
    classType: function() {
      if (this.displayType === 'tile') return 'posts-tile-wrapper'
      if (this.displayType === 'list') return 'posts-list-wrapper'
      if (this.displayType === 'tile-list') return 'posts-tile-list-wrapper'
    },
    displayType: function() {
      return this.$store.getters.getListStyle
    },
  },
  mounted() {
    getAllPosts().then(posts => (this.posts = posts))
  },
}

export default Posts
</script>

<style scoped>
.posts-head {
  display: flex;
  position: relative;
  width: 100%;
  height: 30em;
  background-position: center center;
  background-size: cover;
  z-index: 2;
}

.head-text {
  font-size: 5em;
  align-self: center;
  margin-left: 2em;
}

.post-create {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background-color: #eee;
  cursor: pointer;
}

.select-display-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 90%;
  margin: 1em auto;
}

.posts-tile-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5em 1em;
  place-items: center;
  place-content: center;
  width: 90%;
  min-height: 60em;
  margin: 2em auto;
}

.posts-list-wrapper {
  min-height: 60em;
}

.posts-tile-list-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  place-content: center;
  width: 90%;
  margin: 2em auto;
}
</style>

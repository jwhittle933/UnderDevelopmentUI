<template>
  <div class="posts-view">
    <div
      class="posts-head"
      :style="{
        'background-image': 'url(' + image + ')',
      }"
    >
      <span class="head-text">All Posts</span>
      <div class="post-create">C</div>
    </div>
    <PostsMenu
      :showPostMenu="showPostMenu"
      v-on:update:show-posts-menu="showPostMenu = !showPostMenu"
    ></PostsMenu>
    <div class="posts-wrapper">
      <!-- <div class="post-tiles" v-for="post in posts" :key="post.id"> -->
      <!--   {{ post }} -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { getAllPosts } from '@/Utils/requests/mock'
import { PostsMenu } from './PostsMenu'

export const Posts = {
  name: 'PostsView',
  components: {
    PostsMenu,
  },
  data() {
    return {
      posts: [],
      showPostMenu: false,
      image: require('@/assets/all_posts.jpg'),
    }
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
}
</style>

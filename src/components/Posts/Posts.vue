<template>
  <div class="posts-view">
    <div
      class="posts-head"
      :style="{
        'background-image': 'url(' + image + ')',
      }"
    >
      <span class="head-text">All Posts</span>
      <PostsMenu></PostsMenu>
    </div>
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
}

.head-text {
  font-size: 5em;
  align-self: center;
  margin-left: 2em;
}
</style>

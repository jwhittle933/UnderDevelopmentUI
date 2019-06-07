<template>
  <div class="posts-view">
    <div class="posts-head"></div>
    <div class="posts-wrapper">
      <div class="post-tiles" v-for="post in posts" :key="post.id">
        {{ post }}
      </div>
    </div>
  </div>
</template>

<script>
import { getAllPosts } from '@/Utils/requests/mock'

export const Posts = {
  name: 'PostsView',
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    getAllPosts().then(posts => (this.posts = posts))
  },
}

export default Posts
</script>

<style scoped></style>

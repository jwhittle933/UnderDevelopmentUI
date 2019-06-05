<template>
  <div class="post-view">
    <div class="post-head">
      <span class="title">{{ post.title }}</span>
    </div>
  </div>
</template>

<script>
import { getPost } from '@/Utils/requests/mock'

export const Post = {
  name: 'PostView',
  data() {
    return {
      loading: true,
      postId: this.$route.params.id,
      post: {},
      image: require('@/assets/post.jpeg'),
    }
  },
  mounted() {
    getPost(this.$route.params.id).then(p => {
      this.loading = false
      this.post = p
    })
  },
}

export default Post
</script>

<style scoped>
.post-view {
}

.post-head {
  height: 60vh;
  padding: 3em;
  background: url('../../assets/post.jpeg') center center no-repeat;
  background-size: cover;
}

.title {
  font-size: 3em;
}

.img {
  width: 100vw;
}
</style>

<template>
  <div class="post-view">
    <div
      class="post-head"
      :style="{
        'background-image': 'url(' + image + ')',
      }"
    >
      <span class="title">{{ post.title }}</span>
      <p class="timestamp">{{ formatDate(post.inserted_at) }}</p>
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
  display: flex;
  justify-content: center;
  min-height: 30em;
  /* background: url('../../assets/post.jpeg') center center no-repeat; */
  background-position: center center;
  background-size: cover;
  color: white;
}

.title {
  font-size: 3em;
  align-self: center;
}
.timestamp {
  align-self: flex-end;
}
</style>

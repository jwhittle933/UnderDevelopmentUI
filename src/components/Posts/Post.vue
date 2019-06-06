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
    <div class="post-main">
      <div class="post-author">
        <div class="post-author-outer">
          <div class="post-author-name">{{ author.name }}</div>
          <div class="post-author-content">{{ author.bio }}</div>
        </div>
      </div>
      <div class="post-body">
        <span>{{ post.body }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getPost, getAuthor } from '@/Utils/requests/mock'

export const Post = {
  name: 'PostView',
  data() {
    return {
      loading: true,
      postId: this.$route.params.id,
      post: {},
      author: {},
      image: require('@/assets/post.jpeg'),
    }
  },
  mounted() {
    getPost(this.$route.params.id).then(p => {
      getAuthor(p.user_id).then(aut => {
        this.author = aut
        this.loading = false
        this.post = p
      })
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

.post-main {
  display: flex;
  width: 90%;
  padding: 3em;
}

.post-author {
  max-width: 25em;
  margin: 0 auto;
}

.post-author-outer {
  width: 15em;
  margin: 0 auto;
  border: 2px solid blue;
}

.post-author-name {
  width: auto;
  border: 1px solid magenta;
}

.post-body {
  flex-grow: 2;
  max-width: 60em;
}
</style>

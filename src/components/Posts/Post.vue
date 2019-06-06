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
          <div
            class="post-author-image"
            :style="{
              'background-image': 'url(' + authorImage + ')',
            }"
          >
            &nbsp;
          </div>
          <div class="post-author-name">{{ author.name }}</div>
          <p class="post-author-bio">{{ author.bio }}</p>
        </div>
      </div>
      <div class="post-body">
        <p>{{ post.body }}</p>
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
      authorImage: require('@/assets/prof.jpg'),
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
  margin-top: 3em;
}

.post-author {
  max-width: 25em;
  margin: 0 auto;
}

.post-author-outer {
  width: 15em;
  margin: 0 auto;
}

.post-author-image {
  height: 15em;
  border-radius: 50em;
  background-position: top center;
  background-size: cover;
}

.post-author-name {
  font-size: 2em;
  width: auto;
}

.post-author-bio {
  text-align: left;
}

.post-body {
  flex-grow: 2;
  max-width: 45em;
  text-align: left;
  text-indent: 2em;
  font-size: 1.3em;
  line-height: 1.4em;
}

.post-body > p:first-letter {
  font-size: 1.5em;
  line-height: 0;
}
</style>

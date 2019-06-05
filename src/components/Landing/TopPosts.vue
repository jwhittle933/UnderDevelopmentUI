<template>
  <div class="top-posts-container">
    <div class="title-block">
      <span>Top Posts</span>
      <p>
        This is where we'll offer a brief description like "Read our top posts".
      </p>
      <p>
        This block will also contain a search bar/select menu for picking tags.
      </p>
    </div>
    <div class="content-block">
      <div class="top-posts">
        <div class="top-posts-tile-outer" v-for="post in posts" :key="post.id">
          <TopPostsTile v-bind="post"></TopPostsTile>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TopPostsTile } from './TopPostsTile'
import { getAllPosts } from '@/Utils/requests/mock'
/*
 * This component will fetch posts by a tbd category of "top"
 */
export const TopPosts = {
  name: 'TopPosts',
  components: {
    TopPostsTile,
  },
  data() {
    return {
      loading: true,
      posts: null,
    }
  },
  mounted() {
    getAllPosts().then(res => {
      this.posts = res
      this.loading = false
    })
  },
}

export default TopPosts
</script>

<style scoped>
span {
  font-size: 2em;
}
p {
  font-size: 1em;
}

.top-posts-container {
  display: flex;
  margin: 0;
  padding: 3em;
}

.title-block {
  color: #5e5e5e;
  text-align: left;
  margin: 1em auto;
  min-width: 20vw;
}

.content-block {
  color: #f1f1f1;
  margin-left: 1em;
}

.top-posts {
  margin-top: 2em;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
</style>

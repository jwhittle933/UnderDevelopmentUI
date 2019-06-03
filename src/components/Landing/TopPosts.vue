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
      <div class="top-posts-grid">
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
      posts: null,
    }
  },
  mounted() {
    getAllPosts().then(res => (this.posts = res))
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
  justify-content: space-between;
  width: 86em;
  background-color: rgb(0, 0, 0);
  margin: 0;
  padding: 3em;
}

.title-block {
  color: #f1f1f1;
  text-align: left;
  width: 25%;
  margin: 1em auto;
}

.content-block {
  color: #f1f1f1;
  max-width: 70em;
  margin-left: 1em;
}

.top-posts-grid {
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0.5em;
  grid-row-gap: 0.5em;
}
</style>

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
      <span>Posts</span>
      <p>
        This where we'll render the posts that the api sends in tiles. Perhaps
        3x6 or 4x6 grid area.
      </p>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
/*
 * This component will fetch posts by a tbd category of "top"
 */
export const TopPosts = {
  name: 'TopPosts',
  data() {
    return {
      topPosts: [],
    }
  },
  // mounted: () => {
  //   axios.get('some/url/enpoint').then(res => (this.topPosts = res.data))
  // },
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
  display: grid;
  grid-template-row: 100%;
  grid-template-columns: 25% 75%;
  height: 30em;
  background-color: rgb(0, 0, 0);
  margin: 0;
  padding: 3em;
}

.title-block {
  color: #f1f1f1;
  text-align: left;
}

.content-block {
  color: #f1f1f1;
}
</style>

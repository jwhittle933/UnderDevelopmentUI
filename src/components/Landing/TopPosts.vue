<template>
  <div class="top-posts-container">
    <div class="title-block">
      Top Posts
    </div>
    <div class="content-block">
      Posts
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
.top-posts-container {
  display: grid;
  grid-template-row: 100%;
  grid-template-columns: 25% 75%;
  height: 30em;
  background-color: rgb(0, 0, 0);
  margin: 0;
}
</style>

<template>
  <div class="landing">
    <img class="bg-image" :src="image" />
    <TopPosts></TopPosts>
  </div>
</template>

<script>
import { TopPosts } from './'

export const Landing = {
  name: 'LandingView',
  components: {
    TopPosts,
  },
  data() {
    return {
      image: require('../../assets/splash.jpg'),
    }
  },
}

export default Landing
</script>

<style scoped>
.bg-image {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>

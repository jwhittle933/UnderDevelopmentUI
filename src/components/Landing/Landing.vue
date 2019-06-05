<template>
  <div class="landing">
    <div class="bg-image-wrapper">
      <img class="bg-image" :src="image" />
    </div>
    <TopPosts></TopPosts>
  </div>
</template>

<script>
import { TopPosts } from './TopPosts'

export const Landing = {
  name: 'LandingView',
  components: {
    TopPosts,
  },
  data() {
    return {
      image: require('@/assets/splash.jpg'),
    }
  },
}

export default Landing
</script>

<style scoped>
.bg-image-wrapper {
  height: 100vh;
  width: 100vw;
  margin: 0;
}

.bg-image {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>

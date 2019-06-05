<template>
  <div class="landing">
    <div
      class="bg-image-wrapper"
      :style="{
        'background-image': 'url(' + image + ')',
      }"
    ></div>
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
  min-height: 40em;
  margin: 0;
  background-position: top center;
  background-size: cover;
}

.bg-image {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>

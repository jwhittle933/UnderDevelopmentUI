<template>
  <div class="landing">
    <div
      class="bg-image-wrapper"
      :style="{
        'background-image': 'url(' + image + ')',
      }"
    >
      <div class="menu-wrapper">
        <Menu></Menu>
      </div>
    </div>
    <TopPosts></TopPosts>
  </div>
</template>

<script>
import { TopPosts } from './TopPosts'
import { Menu } from '../Layout'

export const Landing = {
  name: 'LandingView',
  components: {
    TopPosts,
    Menu
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
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
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

.menu-wrapper {
  display: flex; 
  margin-bottom: 5em; 
  margin-right: 5em; 
}
</style>

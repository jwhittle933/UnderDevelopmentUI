<template>
  <div class="landing">
    <div
      class="bg-image-wrapper"
      :style="{
        'background-image': 'url(' + image + ')',
      }"
    >
      <transition name="button-slide">
      <div class="menu-button" @click="unrollMenu = !unrollMenu">
          <span>Menu</span>
      </div>
      </transition>
      <transition name="slide">
      <div v-if="unrollMenu" class="menu-wrapper">
        <Menu></Menu>
      </div>
      </transition>
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
      unrollMenu: false,
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

.menu-button {
    display: flex; 
    justify-content: center; 
    flex-direction: column; 
    border-radius: 50%;
    height: 75px;
    width: 75px; 
    background-color: #EEE; 
    font-size: 1.25em; 
    margin-bottom: 5em;
    margin-right: 5em; 
    cursor: pointer;
}

.menu-wrapper {
  display: flex; 
  height: 300px;
  margin-bottom: 10em; 
  margin-right: 0; 
}

/* Transitions */

.slide-enter-active, .slide-leave-active {
  transition: .5s;
}

.slide-enter {
  transform: translate(100%, 0); 
}

 .slide-leave-to {
  transform: translate(100%, 0);
}

.button-slide-enter-active, .button-slide-leave-active {
  transition: .5s ease;
}

.button-slide-enter {
  margin-right: 5em; 
}

.button-slide-leave-to {
  margin-right: 1em; 
}

</style>

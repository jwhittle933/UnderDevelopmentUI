<template>
  <div class="landing">
    <div
      class="bg-image-wrapper"
      :style="{
        'background-image': 'url(' + image + ')',
      }"
    >
        <div class="menu-button" @click="unrollMenu = !unrollMenu">
          Menu
        </div>
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
    Menu,
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
  position: relative;
  min-height: 40em;
  margin: 0;
  background-position: top center;
  background-size: cover;
}

.menu-button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5%;
  left: 3%;
  border-radius: 50%;
  height: 4em;
  width: 4em;
  background-color: #eee;
  font-size: 0.75em;
  cursor: pointer;
}

.menu-wrapper {
  display: flex;
  height: 300px;
  margin-bottom: 10em;
  margin-right: 0;
}

/* Transitions */

.slide-enter-active,
.slide-leave-active {
  transition: 0.5s;
}

.slide-enter {
  transform: translate(0, 100%);
}

.slide-leave-to {
  transform: translate(0, 100%);
}

</style>

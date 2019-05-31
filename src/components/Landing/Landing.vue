<template>
  <img class="bg-image" :src="image" />
</template>

<script>
export const Landing = {
  name: 'LandingView',
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

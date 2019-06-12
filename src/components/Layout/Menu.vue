<template>
  <div class="menu-wrapper-outer">
    <div class="menu-wrapper-inner">
      <div class="menu-links">
        <div class="main-link" @click="goInfo">
          <InfoIcon></InfoIcon>
        </div>
        <div class="main-link" @click="goPosts">
          <PostsIcon></PostsIcon>
        </div>
        <div class="main-link" @click="goContact">
          <ContactIcon></ContactIcon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { InfoIcon, PostsIcon, ContactIcon } from '../Shared'

export const Menu = {
  name: 'Menu',
  components: {
    InfoIcon,
    PostsIcon,
    ContactIcon,
  },
  methods: {
    goInfo: function() {
      this.$router.push('/info')
    },
    goPosts: function() {
      this.$router.push('/posts')
    },
    goContact: function() {
      this.$router.push('/contact')
    },
  },
}

export default Menu
</script>

<style scoped>
.menu-wrapper-outer {
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  margin-right: 1em;
  cursor: pointer;
}

.menu-wrapper-inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 0.7em;
}

.menu-links {
  display: flexbox;
  padding: 0 1em;
  color: #eee;
  text-decoration: none;
  font-weight: bold;
}

.main-link {
  height: 30px;
  width: 75px;
  padding-bottom: 1em;
  border: none;
  position: relative;
  background-color: inherit;
  font-size: 1.1em;
}

svg {
  width: 75px;
  height: 30px;
  fill: white;
}
</style>

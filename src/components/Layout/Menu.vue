<template>
  <div class="menu-wrapper-outer">
    <div class="menu-wrapper-inner">
      <div class="menu-links">
        <div class="main-link" @click="goInfo">Info</div>
        <div class="main-link" @click="goPosts">Posts</div>
        <div class="main-link" @click="goContact">Contact Us</div>
      </div>
    </div>
  </div>
</template>

<script>
export const Menu = {
  name: 'Menu',
  methods: {
    goInfo: function() {
      this.$router.push('/info')
    },
    goPosts: function() {
      this.$router.push('/posts')
    },
    goContact: function() {
      this.$router.push('/contact-us')
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
  margin-left: 1em;
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
  padding-bottom: 1.75em;
  border: none;
  color: inherit;
  position: relative;
  background-color: inherit;
  font-size: 1.1em;
}
</style>

<template>
  <div class="menu-wrapper-outer">
    <div class="menu-wrapper-inner">
      <div class="menu-links">
        <div class="main-link" @click="goInfo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
            ></path>
          </svg>
        </div>
        <div class="main-link" @click="goPosts">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </div>
        <div class="main-link" @click="goContact">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path
              d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zm0 16H2V5h20v14zm-2.99-1.01L21 16l-1.51-2h-1.64c-.22-.63-.35-1.3-.35-2s.13-1.37.35-2h1.64L21 8l-1.99-1.99c-1.31.98-2.28 2.37-2.73 3.99-.18.64-.28 1.31-.28 2s.1 1.36.28 2c.45 1.61 1.42 3.01 2.73 3.99zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.59c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12v-1.41zM5.48 16c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1H5.48z"
            ></path>
          </svg>
        </div>
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
  margin-left: 0.5em;
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

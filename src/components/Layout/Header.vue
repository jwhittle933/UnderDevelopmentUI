<template>
  <div id="header" class="header" v-scroll="scroll">
    <div class="logo" @click="goHome">
      {{ headerText }}
    </div>
    <div
      class="user"
      @click="toLogin"
      @mouseover="showUserOrLogin = true"
      @mouseleave="showUserOrLogin = false"
    >
      <UserIcon></UserIcon>
      <p class="user-text" v-if="showUserOrLogin">
        {{ getUser.userName || 'Login' }}
      </p>
    </div>
  </div>
</template>

<script>
import { UserIcon } from '../Shared'
import { mapGetters } from 'vuex'

export const Header = {
  name: 'Header',
  components: {
    UserIcon,
  },
  data() {
    return {
      headerText: '_D | under development',
      showUserOrLogin: false,
    }
  },
  methods: {
    goHome: function() {
      this.$router.push('/')
    },
    toLogin: function() {
      this.$router.push('/login')
    },
    scroll: function(evt, el) {
      if (window.scrollY > 150) {
        el.setAttribute(
          'style',
          'color: white; background-color:  rgba(120, 120, 120, 0.4)',
        )
      } else el.setAttribute('style', 'color: #000')
    },
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'getUser']),
  },
}

export default Header
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  overflow: visible;
  width: 100%;
  max-height: 2em;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: background-color 0.2s ease-in;
}

.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 6em;
  padding-right: 2em;
  cursor: pointer;
  color: #d3d3d3;
}

.user-text {
  transition: all 2s linear;
}

.logo {
  font-family: 'Nunito', sans-serif;
  font-size: 1.5em;
  cursor: pointer;
  color: inherit;
  transition: color 0.3s ease-in;
}
</style>

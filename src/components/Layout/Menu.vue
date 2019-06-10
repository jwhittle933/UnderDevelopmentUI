<template>
  <div class="menu-wrapper-outer">
    <div class="menu-button" @click="unrollMenu = !unrollMenu">
        <span>Menu</span>
    </div>
    <transition name="slide-in-left">
    <div v-if="unrollMenu" class="menu-wrapper-inner">
        <div
        class="menu-links"
        @mouseover="infoHover = false"
        @mouseleave="infoHover = false"
        >
        <div class="main-link">Info</div>
        <ul v-if="infoHover" class="dropdown-menu">
            <li
            class="dropdown-link"
            v-for="link in infoLinks"
            :key="link"
            >{{ link.text }}</li>
        </ul>
        </div>

        <div
        class="menu-links"
        @mouseover="postHover = false"
        @mouseleave="postHover = false"
        >
        <div class="main-link">Posts</div>
        <ul v-if="postHover" class="dropdown-menu">
            <li
            class="dropdown-link"
            v-for="link in postLinks"
            :key="link"
            >{{ link.text }}</li
            >
        </ul>
        </div>
        <div class="menu-links">
        <div class="main-link">Contact Us</div>
        </div>
    </div>
    </transition>
  </div>
</template>

<script>
export const Menu = {
  name: 'Menu',
  data() {
    return {
      links: [`Info`, `Posts`, `Contact Us`],
      infoLinks: [
        {
          text: 'About Us',
          path: '/about-us'
        },
        {
          text: 'Authors',
          path: '/authors'
        }
        ],
      postLinks: [
        {
          text: 'Top Posts', 
          path: '/top-posts'
        },
        {
          text: 'Development',
          path: '/development'
        },
        { text: 'Christian Living',
          path: 'christian-living'
        }
      ],
      infoHover: false,
      postHover: false,
      unrollMenu: false, 
    }
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
}

.menu-wrapper-inner {
    background-color: #EEE; 
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
}


.menu-links {
  display: flexbox;
  padding: 0 1em;
  color: #000;
  text-decoration: none;
  font-weight: bold;
}

.main-link {
  height: 30px;
  width: 75px;
  border: none;
  color: inherit;
  background-color: inherit;
  font-size: 1.1em; 
}

.dropdown-menu {
  padding: 0;
  margin: 0;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  color: inherit;
  text-decoration: none;
  background-color: inherit;
}

.dropdown-link {
  display: block;
}

ul {
  color: #000;
}

.slide-in-left-enter-active, .slide-in-left-leave-active {
    transition: .5s;
}

.slide-in-left-enter {
    transform: translate(100%, 0);
}

 .slide-in-left-leave-to {
    transform: translate(100%, 0); }
</style>

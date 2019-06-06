<template>
  <div class="menu-wrapper">
    <div
      class="menu-links"
      @mouseover="infoHover = true"
      @mouseleave="infoHover = false"
    >
      <button>Info</button>
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
      @mouseover="postHover = true"
      @mouseleave="postHover = false"
    >
      <button>Posts</button>
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
      <button>Contact Us</button>
    </div>
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
    }
  },
}
export default Menu
</script>

<style scoped>

.menu-wrapper {
  display: flex;
  justify-content: space-between;
  align-content: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  margin-right: 1em;
  justify-content: space-between;
}

.menu-links {
  display: flexbox;
  padding: 0 1em;
  color: #000;
  text-decoration: none;
  font-weight: bold;
}

button {
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
</style>

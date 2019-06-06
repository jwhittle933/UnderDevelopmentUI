<template>
  <nav class="menu-wrapper">
    <div
      class="menu-links"
      @mouseover="infoHover = true"
      @mouseleave="infoHover = false"
    >
      <button>Info</button>
      <ul v-if="infoHover" class="dropdown-menu">
        <a
          :href="link"
          class="dropdown-link"
          v-for="link in infoLinks"
          :key="link"
          >{{ link.text }}</a
        >
      </ul>
    </div>

    <div
      class="menu-links"
      @mouseover="postHover = true"
      @mouseleave="postHover = false"
    >
      <button>Posts</button>
      <ul v-if="postHover" id="posts-link" class="dropdown-menu">
        <a
          :href="link"
          class="dropdown-link"
          v-for="link in postLinks"
          :key="link"
          >{{ link.text }}</a
        >
      </ul>
    </div>
    <div class="menu-links">
      <button>Contact Us</button>
    </div>
  </nav>
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
button {
  height: 30px;
  width: 60px;
  border: none;
  color: inherit;
  background-color: inherit; 
}
.menu-wrapper {
  display: flex;
  background-color: rgba(0, 0, 0, 0);
  margin-right: 1em;
}
.menu-links {
  margin: 0 1em;
  display: inline-block;
  padding: 0.5em 1em;
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}

.dropdown-menu {
  padding-top: 1.5em;
  padding-right: 0.5em;
  padding-left: 0.5em;
  color: inherit;
  text-decoration: none;
  background-color: rgba(120, 120, 120, 0.4);
}

.dropdown-link {
  display: block;
}

ul {
  color: #2c3e50;
}
</style>

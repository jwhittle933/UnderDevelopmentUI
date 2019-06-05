<template>
  <nav class="menu-wrapper">
    <div
      class="menu-links"
      @mouseover="infoHover = true"
      @mouseleave="infoHover = false"
    >
      <li><a href="/info">Info</a></li>
      <ul v-if="infoHover" class="info-link dropdown-menu">
        <a
          :href="link"
          class="dropdown-link"
          v-for="link in infoLinks"
          :key="link"
          >{{ link }}</a
        >
      </ul>
    </div>

    <div
      class="menu-links"
      @mouseover="postHover = true"
      @mouseleave="postHover = false"
    >
      <li><a href="/posts">Posts</a></li>
      <ul v-if="postHover" id="posts-link" class="dropdown-menu">
        <a
          :href="link"
          class="dropdown-link"
          v-for="link in postLinks"
          :key="link"
          >{{ link }}</a
        >
      </ul>
    </div>
    <div class="menu-links">
      <li><a href="/contact">Contact Us</a></li>
    </div>
  </nav>
</template>

<script>
export const Menu = {
  name: 'Menu',
  data() {
    return {
      links: [`Info`, `Posts`, `Contact Us`],
      infoLinks: ['About Us', 'Authors'],
      postLinks: ['Top Posts', 'Development', 'Christian Living'],
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
.menu-links a {
  color: inherit;
  text-decoration: inherit;
}
.dropdown-menu {
  position: absolute;
  padding-top: 1.5em;
  padding-right: 0.5em;
  padding-left: 0.5em;
  color: inherit;
  text-decoration: none;
  background-color: rgba(120, 120, 120, 0.4);
}
.info-link {
  top: 19%;
  right: 23%;
}
#posts-link {
  top: 18%;
  right: 13%;
}
.dropdown-link {
  display: block;
}

ul {
  color: #2c3e50;
}
</style>

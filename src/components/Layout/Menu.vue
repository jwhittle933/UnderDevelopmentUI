<template>
  <div class="menu-wrapper-outer">
        <div class="menu-wrapper-inner">
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
  cursor: pointer;
}

.menu-wrapper-inner {
    display: flex; 
    flex-direction: column; 
    justify-content: space-between;
    background-color: #EEE; 
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

</style>

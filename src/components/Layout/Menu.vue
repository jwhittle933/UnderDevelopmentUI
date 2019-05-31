<template>
  <div id='menu-wrapper'>
    <a class='menu-links' @mouseover='hover=true' @mouseleave='hover=false' :href=link v-for='link in links' :key='link'>{{ link }}</a>
    <ul v-if='hover'>
      <li>IT Works!</li>
    </ul>
  </div>
</template>

<script>
export default {  
  name: 'Menu',
  data () {
    return {
        links: [`Info`, `Posts`, `Contact Us`],
        hover: false,
    }
  },
}
</script>

<style scoped>
  .menu-links {
    display: inline-block;
    padding: .5em 1em;
    color: white;
    text-decoration: none;
  }
  #menu-wrapper {
    margin-top: 1em;
    background-color: #2c3e50;
    margin-right: 1em;
  }
  ul {
    color: white;
  }
</style>

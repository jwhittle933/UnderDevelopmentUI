<template>
    <div id='menu-wrapper'>
        <a class='menu-links' :href=link v-for='link in links' :key='link'>{{ link }}</a>
    </div>
</template>

<script>
export default {
   
    name: 'Menu',

    data () {

        return {
            links: [`Info`, `Posts`, `Contact Us`]
        }
    },
}
</script>

<style scoped>
   .menu-links {
       display: block; 
       padding: .5em 1em;
       color: white; 
       text-decoration: none;
   }
   #menu-wrapper {
        margin-top: 50px; 
        background-color: #2c3e50;
   }
</style>

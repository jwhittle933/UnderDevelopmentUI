<template>
    <div id='menuList'>
        <a class='menu-links' :href=link v-for='link in links' :key='link'>{{ link }}</a>
    </div>
</template>

<script>
export default {
   
    name: 'Menu',

    data () {

        return {
            links: [`Home`, `Profile`, `Authors`, `About Us`, `Contact Us`, `Login`]
        }
    },
}
</script>

<style scoped>
   .menu-links {
        padding: 0 1em;
    }
</style>

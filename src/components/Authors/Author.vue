<template>
  <div>
    <h1>{{ msg }}{{ authorId }}</h1>
  </div>
</template>

<script>
export default {
  name: 'author',
  data() {
    return {
      msg: `Author `
    }
  },
  computed: {
    authorId() {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped></style>

<template>
  <div>
    <h1>{{ msg }}{{ authorId }}</h1>
  </div>
</template>

<script>
export const Author = {
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

export default Author
</script>

<style scoped></style>

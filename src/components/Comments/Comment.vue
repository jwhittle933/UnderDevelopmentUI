<template>
  <div>
    <h1>{{ msg }}{{ commentId }}</h1>
  </div>
</template>

<script>
export const Comment = {
  name: 'Comment ',
  data() {
    return {
      msg: 'This is a single Comment',
    }
  },
  computed: {
    commentId() {
      return this.$route.params.id
    },
  },
}

export default Comment
</script>

<style scoped></style>

<template>
  <div>
    <h1>{{ msg }}{{ commentId }}</h1>
  </div>
</template>

<script>
export const Comment = {
  name: 'Comment Component',
  data() {
    return {
      msg: 'Comment ',
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

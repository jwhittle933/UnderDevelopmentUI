<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export const Comments = {
  name: 'CommentsComponent',
  data() {
    return {
      msg: 'This is the Comments Component.',
    }
  },
}

export default Comments
</script>

<style scoped></style>

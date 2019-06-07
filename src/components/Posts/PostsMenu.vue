<template>
  <div class="post-menu">
    <div class="post-select">Select a Category</div>
    <div class="post-search">Search</div>
  </div>
</template>

<script>
export const PostsMenu = {
  name: 'PostsMenu',
  data() {
    return {
      selectOptions: [
        {
          label: 'Christian Living',
          value: 'cl',
        },
        {
          label: 'Development',
          value: 'dev',
        },
        {
          label: 'Social Justice',
          value: 'socjus',
        },
      ],
      selected: '',
      searched: '',
    }
  },
}

export default PostsMenu
</script>

<style scoped>
.post-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 1em;
  left: 0;
  width: 100%;
  height: 5em;
  background-color: rgba(120, 120, 120, 0.4);
}

.post-select {
  margin-left: 2em;
}

.post-search {
  margin-right: 2em;
}
</style>

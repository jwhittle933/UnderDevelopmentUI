<template>
  <div class="post-menu">
    <div class="post-select-wrapper">
      <select v-model="selected" class="post-menu-select">
        <option disabled value="">Select a Topic</option>
        <option
          v-for="option in selectOptions"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
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
  background-color: rgba(120, 120, 120, 0.5);
}

.post-menu-select {
  width: 15em;
  font-size: 1.1em;
  font-family: inherit;
  border: 1px solid transparent;
  outline: none;
  padding-left: 0.5em;
  appearance: none;
  cursor: pointer;
  transition: border 0.1s ease-in;
}

.post-menu-select:hover {
  border: 1px solid blue;
}

.post-select-wrapper {
  margin-left: 2em;
}

.post-search {
  margin-right: 2em;
}
</style>

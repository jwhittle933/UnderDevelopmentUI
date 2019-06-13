<template>
  <div class="post-menu" :class="{ 'hide-menu': !showPostMenu }">
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
    <div class="post-search">
      <SearchIcon
        :iconWidth="'2.1em'"
        :color="searching ? '#00FF00' : 'white'"
        :strokeWidth="'0'"
      ></SearchIcon>
      <input v-model="searched" class="post-search-input" />
    </div>
    <div class="post-menu-trigger" @click="showMenu">
      Advanced Search
    </div>
  </div>
</template>

<script>
import { SearchIcon } from '../Shared'
export const PostsMenu = {
  name: 'PostsMenu',
  components: {
    SearchIcon,
  },
  props: {
    showPostMenu: Boolean,
  },
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
  methods: {
    showMenu: function() {
      this.$emit('update:show-posts-menu')
    },
  },
  computed: {
    searching: function() {
      if (this.searched !== '') return true
      return false
    },
  },
}

export default PostsMenu
</script>

<style scoped>
.post-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 3em;
  background-color: rgba(0, 0, 0, 0.7);
  transition: transform 0.3s ease-in;
}

.hide-menu {
  transform: translateY(-100%);
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
  transition: border 0.1s linear;
}

.post-menu-select:hover {
  border: 1px solid blue;
}

.post-select-wrapper {
  margin-left: 2em;
}

.post-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 2em;
}

.post-search-input {
  outline: none;
  font-family: inherit;
  font-size: 1em;
  border-radius: 4px;
  border: none;
  background-color: #eee;
  padding: 0.2em;
}

.post-menu-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 45%;
  bottom: -1.5em;
  height: 1.5em;
  background-color: inherit;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
  color: white;
  padding: 0 1em;
}
</style>

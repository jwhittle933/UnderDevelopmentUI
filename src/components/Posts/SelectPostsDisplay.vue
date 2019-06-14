<template>
  <div class="display-select">
    <PostsViewShowTilesIcon
      :iconWidth="iconWidth"
      :strokeWidth="'0'"
      :color="'black'"
      @icon-clicked="setDisplay('tile')"
    ></PostsViewShowTilesIcon>
    <PostsViewShowListIcon
      :iconWidth="iconWidth"
      :strokeWidth="'0'"
      :color="'black'"
      @icon-clicked="setDisplay('list')"
    ></PostsViewShowListIcon>
    <PostsViewShowTileListIcon
      :iconWidth="iconWidth"
      :strokeWidth="'0'"
      :color="'black'"
      @icon-clicked="setDisplay('tile-list')"
    ></PostsViewShowTileListIcon>
  </div>
</template>

<script>
import {
  PostsViewShowTilesIcon,
  PostsViewShowListIcon,
  PostsViewShowTileListIcon,
} from '../Shared'

export const SelectPostsDisplay = {
  name: 'SelectPostsDisplay',
  props: ['active'],
  components: {
    PostsViewShowTilesIcon,
    PostsViewShowListIcon,
    PostsViewShowTileListIcon,
  },
  data() {
    return {
      iconWidth: '30%',
    }
  },
  methods: {
    setDisplay: function(display) {
      this.$emit('update:displayType', display)
    },
  },
}

export default SelectPostsDisplay
</script>

<style scoped>
.display-select {
  display: flex;
  justify-content: space-between;
  align-itemm: center;
  width: 11%;
  min-width: 6em;
  background-color: rgba(170, 170, 170, 0.6);
  border-radius: 4px;
}
</style>

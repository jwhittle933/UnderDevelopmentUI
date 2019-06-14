<template>
  <div class="display-select">
    <PostsViewShowTilesIcon
      :iconWidth="iconWidth"
      :strokeWidth="'0'"
      :color="'black'"
      @click="$emit('update:displayType', 'tile')"
    ></PostsViewShowTilesIcon>
    <PostsViewShowListIcon
      :iconWidth="iconWidth"
      :strokeWidth="'0'"
      :color="'black'"
      @click="$emit('update:displayType', 'list')"
    ></PostsViewShowListIcon>
    <PostsViewShowTileListIcon
      :iconWidth="iconWidth"
      :strokeWidth="'0'"
      :color="'black'"
      @click="$emit('update:displayType', 'tile-list')"
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
}

export default SelectPostsDisplay
</script>

<style scoped>
.display-select {
  display: flex;
  justify-content: space-between;
  align-itemm: center;
  width: 9em;
  /* background-color: rgba(120, 120, 120, 0.6); */
  border-radius: 4px;
}
</style>

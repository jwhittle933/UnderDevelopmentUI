<template>
  <div class="display-select">
    <PostsViewShowTilesIcon
      :active="active === 'tile'"
      :iconWidth="iconWidth"
      :strokeWidth="'0'"
      :color="active === 'tile' ? activeColor : inactiveColor"
      @icon-clicked="setDisplay('tile')"
    ></PostsViewShowTilesIcon>
    <PostsViewShowTileListIcon
      :active="active === 'tile-list'"
      :iconWidth="iconWidth"
      :strokeWidth="'0'"
      :color="active === 'tile-list' ? activeColor : inactiveColor"
      @icon-clicked="setDisplay('tile-list')"
    ></PostsViewShowTileListIcon>
    <PostsViewShowListIcon
      :active="active === 'list'"
      :iconWidth="iconWidth"
      :strokeWidth="'0'"
      :color="active === 'list' ? activeColor : inactiveColor"
      @icon-clicked="setDisplay('list')"
    ></PostsViewShowListIcon>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
      activeColor: '#0D00C4',
      inactiveColor: '#435964',
    }
  },
  methods: {
    ...mapActions(['setPostsDisplay']),
    setDisplay: function(display) {
      this.setPostsDisplay(display)
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
  /* background-color: rgba(170, 170, 170, 0.6); */
  border-radius: 4px;
}
</style>

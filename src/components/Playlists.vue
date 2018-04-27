<template>
  <div>
    <div v-if="index !== 0" class="f-left w-100pct mg-bt-10px" :key="index" v-for="(item, index) in playlists">
      <img class="f-left mg-r-10px" @click="selectVideo(item)" :src="item.snippet.thumbnails.default.url">
      <div class="mg-bt-10px">
        {{item.snippet.title}}
      </div>
      <button @click="removeFromPlaylist(index)" class="button w-fit-content is-danger" >Remove</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    playlists: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapActions([
      'removeFromPlaylist'
    ])
  }
}
</script>

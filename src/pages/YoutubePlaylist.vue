<template>
  <div class="columns is-marginless">
    <div class="column is-paddingless">
      <Search/>
    </div>
    <div class="column is-paddingless">
      <div class="f-left w-100pct h-400px">
        <!-- Component Player -->
      </div>
      <div class="f-left w-100pct h-400calc ovf-auto">
        <!-- Component Playlists -->
      </div>
    </div>
  </div>
</template>

<script>
import Search from '../components/Search'

export default {
  name: 'YoutubePlaylist',
  data () {
    return {}
  },
  components: {
    Search
  }
}
</script>

<!-- Add "scoped" attribute for limit CSS to this component only -->
<style scoped>
.bg-cl-282828 {
  background-color: #282828;
}
.h-400px {
  height: 400px;
}
.h-400calc {
  height: calc(100vh - 400px);
}
div {
  box-sizing: border-box !important;
  background-color: #000 !important;
  color: #fff !important;
}
</style>

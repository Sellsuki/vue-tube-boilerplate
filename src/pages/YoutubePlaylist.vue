<template>
  <div class="columns is-marginless">
    <div class="column is-paddingless">
      <!-- SearchContent -->
    </div>
    <div class="column is-paddingless">
      <div class="f-left w-100pct h-400px">
        <!-- Player -->
      </div>
      <div class="f-left w-100pct h-400calc ovf-auto">
        <!-- Playlists -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YoutubePlaylist'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
}
</style>

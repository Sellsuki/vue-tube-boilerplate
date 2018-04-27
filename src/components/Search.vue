<template>
  <div>
    <div class="h-56px columns">
      <div class="logo column f-none pd-l-20px w-fit-content">VueTube</div>
      <b-input class="pd-10px column" placeholder="Search" v-model="keyword" @keyup.enter.native="search(keyword)"></b-input>
    </div>
    <div class="h-56calc ovf-y-scroll">
      <div v-if="item.id.kind === 'youtube#video'" class="dp-flex f-drt-row al-it-center pd-10px cs-pointer" :key="index" v-for="(item, index) in searchResults.items">
        <img class="w-fit-content mg-10px" :src="item.snippet.thumbnails.default.url" alt="">
        <div class="dp-flex f-drt-column">
          <span>{{item.snippet.title}}</span>
          <button @click="addToPlaylist(item)" class="button w-fit-content is-primary" >Add to Playlist</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      keyword: ''
    }
  },
  computed: {
    ...mapGetters([
      'searchResults'
    ])
  },
  methods: {
    ...mapActions([
      'search',
      'addToPlaylist'
    ])
  },
  created () {
    this.search('')
  }
}
</script>

<style scoped>
.logo {
  font-size: 25px;
  font-weight: bold;
  color: red;
}
</style>

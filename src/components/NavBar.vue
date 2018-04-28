<template>
  <nav class="navbar background-grey">
    <div class="container">
      <div class="navbar-brand logo dp-flex f-drt-column jtf-ct-center">
        VueTube
      </div>
      <div class="navbar-start mg-r-0px f-left w-100pct">
        <div class="navbar-item f-left w-100pct">
          <b-input class="pd-10px column" placeholder="Search" v-model="keyword" @keyup.enter.native="search(keyword)"></b-input>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    search (keyword) {
      console.log(keyword)
    }
  }
}
</script>

<style scoped>
.logo {
  font-size: 25px;
  font-weight: bold;
  color: #42b883;
}
.background-grey {
  background-color: #131313
}
</style>

<template>
  <div>
    <div class="h-56px columns">
      <div class="logo column f-none pd-l-20px w-fit-content">VueTube</div>
      <b-input class="pd-10px column" placeholder="Search"></b-input>
    </div>
    <div class="h-56calc ovf-y-scroll">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keyword: ''
    }
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

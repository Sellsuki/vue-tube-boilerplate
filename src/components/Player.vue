<template>
  <div class="h-100pct dp-flex f-drt-column jtf-ct-center">
    <div v-if="false">
      <!-- Youtube Embed Component -->
    </div>
    <h3 v-else
      class="title t-al-center">
      No video selected
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      default: () => { return {} }
    }
  }
}
</script>

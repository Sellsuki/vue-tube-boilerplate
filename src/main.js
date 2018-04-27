// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Buefy from 'buefy'
import VueYouTubeEmbed from 'vue-youtube-embed'

import App from './App'
import router from './router'
import store from './store'

import 'buefy/lib/buefy.css'
import 'begeta'

Vue.use(VueYouTubeEmbed)
Vue.use(Buefy)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

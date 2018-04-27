import Vue from 'vue'
import Router from 'vue-router'
import YoutubePlaylist from '../pages/YoutubePlaylist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'YoutubePlaylist',
      component: YoutubePlaylist
    }
  ]
})

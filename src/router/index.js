import Vue from 'vue'
import Router from 'vue-router'
import player from '@/view/player'
import user from '@/view/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/player',
      name: 'player',
      component: player
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/',
      redirect:'/player'
    }
  ]
})

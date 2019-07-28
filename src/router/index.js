import Vue from 'vue'
import Router from 'vue-router'
import player from '@/view/player'
import user from '@/view/user'
import waiting from '@/view/waiting'

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
      path: '/waiting',
      name: 'waiting',
      component: waiting
    },
    {
      path: '/',
      redirect:'/player'
    }
  ]
})

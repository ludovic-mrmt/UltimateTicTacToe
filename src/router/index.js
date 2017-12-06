import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Morpion from '../components/Morpion'
import Stats from '../components/Stats'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/morpion',
      name: 'Morpion',
      component: Morpion
    },
    {
      path: '/stats',
      name: 'Stats',
      component: Stats
    }
  ],
  mode: 'history'
})

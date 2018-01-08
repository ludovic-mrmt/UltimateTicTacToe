import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'

import Morpion from '../components/Morpion'
import Stats from '../components/Stats'
import Regles from '../components/Regles'
import Signup from '../components/Signup'


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
    },
    {
      path: '/regles',
      name: 'Regles',
      component: Regles
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup

    }
  ],
  mode: 'history'
})

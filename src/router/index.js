import Vue from 'vue'
import Router from 'vue-router'
import rules from '../components/rules'
import Home from '../components/Home'
import Morpion from '../components/Morpion'
import Stats from '../components/Stats'
import Regles from '../components/Regles'

Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/rules',
     name: 'Rules',
     component: rules
   },
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
    }
  ],
  mode: 'history'
})

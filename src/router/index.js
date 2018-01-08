import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
<<<<<<< HEAD
import Ruless from '../components/Ruless'
import NormalTicTacToe from '../components/NormalTicTacToe'
import TheUltimateGameOfTicTacToe from '../components/TheUltimateGameOfTicTacToe'
=======
import Morpion from '../components/Morpion'
import Stats from '../components/Stats'
import Regles from '../components/Regles'
import Signup from '../components/Signup'

>>>>>>> 3a602c2ce3e8be904f0acec17617f07b3191f1d4
Vue.use(Router)

export default new Router({
  routes: [

   {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
<<<<<<< HEAD
      path: '/Ruless',
      name: 'Ruless',
      component: Ruless
    },
    {
      path:'/NormalTicTacToe',
      name: 'NormalTicTacToe',
      component: NormalTicTacToe
    },
    {
      path: '/TheUltimateGameOfTicTacToe',
      name: '/TheUltimateGameOfTicTacToe',
      component: TheUltimateGameOfTicTacToe
=======
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
>>>>>>> 3a602c2ce3e8be904f0acec17617f07b3191f1d4
    }
  ],
  mode: 'history'
})

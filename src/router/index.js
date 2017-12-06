import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Ruless from '../components/Ruless'
import NormalTicTacToe from '../components/NormalTicTacToe'
import TheUltimateGameOfTicTacToe from '../components/TheUltimateGameOfTicTacToe'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
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
    }
  ],
  mode: 'history'
})

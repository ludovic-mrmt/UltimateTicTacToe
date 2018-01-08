import Vue from 'vue'
import App from './App.vue'
import * as firebase form 'firebase'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import router from './router'


Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
  created () {
    firebase.initializeApp({
    apiKey: 'AIzaSyCWgKD-OvsaDSTxFL279qtO_PcGs5-nneY',
    authDomain: 'ultimate-morpion.firebaseapp.com',
    databaseURL: 'https://ultimate-morpion.firebaseio.com',
    projectId: 'ultimate-morpion',
    storageBucket: 'ultimate-morpion.appspot.com',
    })
  }
})

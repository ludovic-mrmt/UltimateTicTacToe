import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import router from './router'
<<<<<<< HEAD
=======

>>>>>>> 3a602c2ce3e8be904f0acec17617f07b3191f1d4

Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
<<<<<<< HEAD
  render: h => h(App)
=======
  render: h => h(App),
  created () {
    firebase.initializeApp({
    apiKey: 'AIzaSyCWgKD-OvsaDSTxFL279qtO_PcGs5-nneY',
    authDomain: 'ultimate-morpion.firebaseapp.com',
    databaseURL: 'https://ultimate-morpion.firebaseio.com',
    projectId: 'ultimate-morpion',
    storageBucket: 'ultimate-morpion.appspot.com',
    })
  }
>>>>>>> 3a602c2ce3e8be904f0acec17617f07b3191f1d4
})

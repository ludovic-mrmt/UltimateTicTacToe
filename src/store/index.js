import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
     setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },

   signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    pseudoUp ({commit}, payload) {
      firebase.database().ref('name').push(payload.name)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
})

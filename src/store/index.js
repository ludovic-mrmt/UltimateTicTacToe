import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    pseudo: null,
    email: null,
    error: null
  },
  mutations: {
     setUser (state, payload) {
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setError', error)
            console.log(error)
          }
        )
    },

   signUserIn ({commit}, payload) {
     commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setError', error)
            console.log(error)
          }
        )
    },
    pseudoUp ({commit}, payload) {
      var data = {
        name: payload.name,
        email: payload.email
      }
      firebase.database().ref('name').push(data)
      .then((data) => {
      })
      .catch((error) => {
        console.log(error);
      })
    },

  },
  getters: {
    user (state) {
      return state.user
    }
  }
})

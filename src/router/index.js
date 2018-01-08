import Vue from 'vue'
import Router from 'vue-router'
import rules from '../components/rules'

Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/rules',
     name: 'Rules',
     component: rules
    }

  ],
  mode: "history"
})

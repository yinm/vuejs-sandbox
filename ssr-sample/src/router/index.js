import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Counter from '../views/Counter'
import Weather from '../views/Weather'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/counter',
      component: Counter
    },
    {
      path: '/weather',
      component: Weather
    },
    {
      path: '/',
      redirect: '/counter'
    }
  ]
})

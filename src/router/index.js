import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'
import SimpleGridLayout from '@/containers/SimpleGridLayout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/simple-grid-layout',
      name: 'Simple Grid Layout',
      component: SimpleGridLayout
    }
  ]
})

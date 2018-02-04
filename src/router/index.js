import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'
import SimpleGridLayout from '@/containers/SimpleGridLayout'
import GridRowCol from '@/containers/GridRowCol'
import NamedGridLines from '@/containers/NamedGridLines'

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
    },
    {
      path: '/grid-row-col',
      name: 'Grid Row Col',
      component: GridRowCol
    },
    {
      path: '/named-grid-lines',
      name: 'Named Grid Lines',
      component: NamedGridLines
    }
  ]
})

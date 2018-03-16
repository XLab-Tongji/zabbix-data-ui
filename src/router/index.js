import Vue from 'vue'
import Router from 'vue-router'
import HostPage from '@/components/HostPage'
import ItemPage from '@/components/ItemPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HostPage',
      component: HostPage
    },
    {
      path: '/2',
      name: 'ItemPage',
      component: ItemPage
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HostPage from '@/components/HostPage'
import ItemPage from '@/components/ItemPage'
import ItemDataPage from '@/components/ItemDataPage'

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
    },
    {
      path: '/3/:hostid',
      name: 'ItemDataPage',
      component: ItemDataPage
    }
  ]
})

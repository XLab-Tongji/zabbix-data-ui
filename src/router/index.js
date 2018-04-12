import Vue from 'vue'
import Router from 'vue-router'
import HostPage from '@/components/HostPage'
import ItemPage from '@/components/ItemPage'
import ItemDataPage from '@/components/ItemDataPage'
import ClusterPage from '@/components/ClusterPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ClusterPage',
      component: ClusterPage
    },
    {
      path: '/2',
      name: 'HostPage',
      component: HostPage
    },
    {
      path: '/3/:hostid',
      name: 'ItemDataPage',
      component: ItemDataPage
    }
  ]
})

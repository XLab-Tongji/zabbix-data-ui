import Vue from 'vue'
import Router from 'vue-router'
import HostPage from '@/components/MainPages/HostPage'
import ItemPage from '@/components/MainPages/ItemPage'
import ItemDataPage from '@/components/MainPages/ItemDataPage'
import ClusterPage from '@/components/MainPages/ClusterPage'
import ZabbixConfigPage from '@/components/ConfigPages/ZabbixConfigPage'
import SuccessPage from '@/components/OtherPages/SuccessPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ClusterPage',
      component: ClusterPage
    },
    {
      path: '/2/:url',
      name: 'HostPage',
      component: HostPage
    },
    {
      path: '/3/:hostid',
      name: 'ItemDataPage',
      component: ItemDataPage
    },
    {
      path: '/zabbixconfig',
      name: 'ZabbixConfigPage',
      component: ZabbixConfigPage
    },
    {
      path: '/success',
      name: 'SuccessPage',
      component: SuccessPage
    }
  ]
})

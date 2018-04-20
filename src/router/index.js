import Vue from 'vue'
import Router from 'vue-router'
import HostPage from '@/components/MainPages/HostPage'
import ItemPage from '@/components/MainPages/ItemPage'
import ItemDataPage from '@/components/MainPages/ItemDataPage'
import ClusterPage from '@/components/MainPages/ClusterPage'
import ZabbixConfigPage from '@/components/ConfigPages/ZabbixConfigPage'
import SuccessConnectPage from '@/components/OtherPages/SuccessConnectPage'
import SuccessAddHost from '@/components/OtherPages/SuccessAddHost'
import HostConfigPage from '@/components/ConfigPages/HostConfigPage'
import TemplateSelectPage from '@/components/OtherPages/TemplateSelectPage'
import GroupSelectPage from '@/components/OtherPages/GroupSelectPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ClusterPage',
      component: ClusterPage
    },
    {
      path: '/2/:ip/:port',
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
      path: '/hostconfig',
      name: 'HostConfigPage',
      component: HostConfigPage
    },
    {
      path: '/successconnect',
      name: 'SuccessConnectPage',
      component: SuccessConnectPage
    },
    {
      path: '/successaddhost',
      name: 'SuccessAddHost',
      component: SuccessAddHost
    },
    {
      path: '/templateselect',
      name: 'TemplateSelectPage',
      component: TemplateSelectPage
    },
    {
      path: '/groupselect',
      name: 'GroupSelectPage',
      component: GroupSelectPage
    }
  ]
})

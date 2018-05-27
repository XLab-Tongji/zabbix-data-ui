import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/MainPages/LoginPage'
import RegisterPage from '@/components/MainPages/RegisterPage'
import UserMainPage from '@/components/MainPages/UserMainPage'
import HostPage from '@/components/MainPages/HostPage'
import ItemComparePage from '@/components/MainPages/ItemComparePage'
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
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage
    },
    {
      path: '/user/:userid',
      name: 'UserMainPage',
      component: UserMainPage,
      children: [
        {
          path: 'cluster',
          name: 'ClusterPage',
          component: ClusterPage
        },
        {
          path: '2/:ip/:port',
          name: 'HostPage',
          component: HostPage
        },
        {
          path: 'itemcompare',
          name: 'ItemComparePage',
          component: ItemComparePage
        },
        {
          path: 'itemdata/:hostid/:hostname',
          name: 'ItemDataPage',
          component: ItemDataPage
        },
        {
          path: 'zabbixconfig',
          name: 'ZabbixConfigPage',
          component: ZabbixConfigPage
        },
        {
          path: 'hostconfig',
          name: 'HostConfigPage',
          component: HostConfigPage
        },
        {
          path: 'successconnect',
          name: 'SuccessConnectPage',
          component: SuccessConnectPage
        },
        {
          path: 'successaddhost',
          name: 'SuccessAddHost',
          component: SuccessAddHost
        },
        {
          path: 'templateselect',
          name: 'TemplateSelectPage',
          component: TemplateSelectPage
        },
        {
          path: 'groupselect',
          name: 'GroupSelectPage',
          component: GroupSelectPage
        }
      ]
    },
   
    
  ]
})

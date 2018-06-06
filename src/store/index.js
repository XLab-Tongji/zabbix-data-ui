import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import cart from './modules/cart'
import products from './modules/products'
import zabbixTemplate from './modules/zabbixTemplate'
import zabbixGroup from './modules/zabbixGroup'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  modules: {
    cart,
    products,
    zabbixTemplate,
    zabbixGroup
  },
  //plugins: [createPersistedState()],
  strict: true,
})



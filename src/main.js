// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/component/title'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/dataZoom'

import './global'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(Vuex)

Vue.component('eChart',ECharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import VueOroneMaterial from '@/plugins/vue-orone-material'
import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueOroneMaterial)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

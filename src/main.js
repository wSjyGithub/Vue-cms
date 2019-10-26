import Vue from 'vue'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import '../dilist/mui/css/mui.min.css'
import '../dilist/mui/css/icons-extra.css'
Vue.use(Mint);

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './App.vue'

import router from './router.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
  
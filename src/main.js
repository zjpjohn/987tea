// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import axios from 'axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint)
//Vue.use(axios)
Vue.prototype.axios = axios

Vue.prototype.user_Id = '0'
//内网地址： 'http://192.168.1.110:8088'
//本地地址： 'http://localhost:55400'  //'http://localhost:8088'
//正式地址： 'http://api.987tea.com'
Vue.prototype.url='http://192.168.1.110:8088'

Vue.config.productionTip = false

//axios.defaults.withCredentials=true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App }
})

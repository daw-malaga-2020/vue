import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import '@/modules/firebase'

import {store} from '@/store'
import {router} from '@/router'


Vue.config.productionTip = false

axios.defaults.baseURL ='https://pizza-delicious-api.herokuapp.com/'

Vue.use(VueAxios, axios)

Vue.filter('toMoney', function(value){
    return new Intl.NumberFormat("es-ES", {style: "currency", currency:"EUR"}).format(value)
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

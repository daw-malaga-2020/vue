import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false

axios.defaults.baseURL = "https://api.chucknorris.io/"

Vue.use(VueAxios, axios)

new Vue({
    render: h => h(App),
}).$mount('#app')
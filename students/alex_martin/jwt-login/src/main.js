import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

axios.defaults.baseURL = "https://pizza-delicious-api.herokuapp.com/";
// axios.defaults.baseURL = "http://localhost:8000";

Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
}).$mount('#app')

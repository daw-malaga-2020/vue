import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

axios.interceptors.request.use(
    (config)=>{
        let url = new URL(config.url)
        if (url.searchParams.get("q") === "Pyongyang, North Korea"){
           config.url =
             "https://api.openweathermap.org/data/2.5/weather?q=Teruel, es&appid=3408896f1d019f9845f9f0726d4dab41&lang=es&units=metric";
        }
        console.log(config.url)

        return config;
    }, 
    (error)=>{ Promise.reject(error)}
)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
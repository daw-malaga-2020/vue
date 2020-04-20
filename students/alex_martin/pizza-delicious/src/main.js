import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


import HomePage from '@/pages/HomePage'
import OrderPage from '@/pages/OrderPage'

const routes = [
    { path: "/", name: "home", component: HomePage },
    { path: "/pedidos", name: "order", component: OrderPage }
]

const router = new VueRouter({ routes, mode: "history" })

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


import HomePage from '@/pages/HomePage'
import ContactPage from '@/pages/ContactPage'
import OrderPage from '@/pages/OrderPage'
import BlogPage from '@/pages/BlogPage'

const routes = [
    { path: "/", name: "HomePage", component: HomePage },
    { path: "/HomePage", name: "HomePage", component: HomePage },
    { path: "/OrderPage", name: "OrderPage", component: OrderPage },
    { path: "/ContactPage", name: "ContactPage", component: ContactPage },
    { path: "/BlogPage", name: "BlogPage", component: BlogPage },
]

const router = new VueRouter({ routes, mode: "history" })

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Pedidos from '@/pages/Pedidos'
import Blog from '@/pages/Blog'
import Contacto from '@/pages/Contacto'

import App from './App.vue'

Vue.config.productionTip = false

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/index.html", redirect: "/" },
    { path: "/pedidos.html", name: "pedidos", component: Pedidos },
    { path: "/blog.html", name: "blog", component: Blog },
    { path: "/contacto.html", name: "contacto", component: Contacto }
]

const router = new VueRouter({
    routes,
    mode: "history"
})
Vue.use(VueRouter)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
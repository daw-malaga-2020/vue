import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'



import HomePage from '@/pages/HomePage'
import ContactPage from '@/pages/ContactPage'
import BlogPage from '@/pages/BlogPage'
import OrderPage from '@/pages/OrderPage'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/contacto",
    name: "contacto",
    component: ContactPage
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogPage
  },
  {
    path: "/pedidos",
    name: "pedidos",
    component: OrderPage
  }
]

const router = new VueRouter({
  routes, mode:"history" }) 

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
 
import Vue from 'vue'
import VueRouter from 'vue-router'

import PaginaUno from "@/pages/PaginaUno"
import PaginaDos from "@/pages/PaginaDos"
import User from "@/pages/User"
import NotFound from "@/pages/NotFound"
import UserProfile from "@/pages/User/UserProfile"
import UserPost from "@/pages/User/UserPost"

import App from './App.vue'

Vue.config.productionTip = false

const routes = [
  {path: "/", name: "home", component: PaginaUno},
  {path: "/dos", name: "home-2", component: PaginaDos},
  {path: "/dos", name: "home-2", component: PaginaDos},
  {path: "/user/:id", name: "user", component: User, props: true,
      children:[
        { path: "profile", component: UserProfile},
        { path: "posts", component: UserPost},
      ]
  },
  {path: "*", name: "notFound", component: NotFound}
]

const router = new VueRouter({
  routes, mode: "history"
})
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

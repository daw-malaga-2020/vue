import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'



import HomePage from '@/pages/HomePage'
import ContactPage from '@/pages/ContactPage'
import BlogPage from '@/pages/BlogPage'
import OrderPage from '@/pages/OrderPage'
import NotFoundPage from '@/pages/NotFoundPage'
import MyOrdersPage from '@/pages/MyOrdersPage'
import LoginPage from '@/pages/LoginPage'

const routes = [
  { path: "/", name: "home", component: HomePage , meta: {isPrivate: 
    false}},
  {  path: "/contacto", name: "contacto",  component: ContactPage , meta: {isPrivate: 
    false}},
  { path: "/blog", name: "blog", component: BlogPage , meta: {isPrivate: 
    false}},
  { path: "/pedidos",  name: "pedidos",  component: OrderPage , meta: {isPrivate: 
    false}},
  { path:"/mispedidos",  name:"mispedidos",  component: MyOrdersPage , meta: {isPrivate: 
    true}},
  { path:"/login",  name:"login", component: LoginPage, meta: {isPrivate: 
    false} },
  { path: "*",  name:"notFound",  component: NotFoundPage , meta: {isPrivate: 
    false}},
  
]

let isAuth = false

const router = new VueRouter({
  routes, mode:"history" }) 

router.beforeEach( (to, from, next) => {
  
  if(to.meta.isPrivate && !isAuth){
    next("login")
  }else{
    next()
  }
})

Vue.config.productionTip = false

axios.defaults.baseURL= 'https://pizza-delicious-api.herokuapp.com/'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

 Vue.filter('toMoney', function(value){
  return new Intl.NumberFormat("es-ES", {style:"currency", currency: "EUR"}).format(value)
}) 

const store = new Vuex.Store({
  state:{
    products: [],
    listOrder:[],
  },
  mutations:{
    addProducts(state, payload){
      state.products = payload
    },
    addToCart(state, item){
      let found = state.listOrder.filter((order) => order.id === item.id)
      if(found.length !=0){
        found[0].quantity++
      }else{
        let order = {
          id: item.id,
          title: item.title,
          unitPrice: item.price,
          quantity: 1
        };
        state.listOrder.push(order);
      }
    },
    sumQuantity(state, product){
      product.quantity++
    },
    decreaseQuantity(state, product){
      product.quantity--;
      if(product.quantity <= 0){
        this.commit("removeProduct", product)
      }
    },
    removeProduct(state, item){
      let foundIndex = state.listOrder.findIndex((item)=> item.id=== item.id)
      state.listOrder.splice(foundIndex, 1);
    }
  },
  actions: {
    async loadProducts(context) {
      let response = await Vue.axios.get("products");
      context.commit("addProducts", response.data);
    }
  },
  getters:{
    listOrderCount(state){
      if(state.listOrder.length<=0){
        return 0
      }
      let units = state.listOrder.map((item)=>item.quantity)
      return units.reduce((sum, current)=> sum + current)
    }
  }
});



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
 
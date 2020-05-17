import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'

import HomePage from '@/pages/HomePage' 
import ProductPage from '@/pages/ProductPage' 
import CartPage from '@/pages/CartPage'
import MyOrders from '@/pages/MyOrders'


const routes= [
  {path: "/", name: "shop", component: HomePage},
  {path: "/products", name: "products", component: ProductPage},
  {path: "/cart", name: "cart", component: CartPage},
  {path: "/myorders", name: "myorders", component: MyOrders},
] 

const router = new VueRouter({routes, mode:"history"})

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://pizza-delicious-api.herokuapp.com'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //eliminar estos productos cuando tenga la base de datos funcionando
    products:[
      {id:1, category:"shirt", img: "https://mm3.vistoenpantalla.com/imagenes-productos/camiseta-bart-large2.jpg", title:"simpson shirt", price:"20"},
      {id:2, category:"shirt", img:"", title:"simpson shirt", price:"20"},
      {id:3, category:"sport wear", img:"img/overlays/03", title:"tennis", price:"10"},
      {id:4, category:"sport wear", img:"img/overlays/04", title:"chandals", price:"10"},
      {id:5, category:"outwears", img:"img/overlays/05", title:"jeans", price:"10"},
      {id:6, category:"outwears", img:"img/overlays/06", title:"shoes", price:"10"}, 
    ],
    listOrder:[]
  },
  mutations:{
    addProducts(state, payload){
      state.product = payload
    },
    addToCart(state, item){
      let found = state.listOrder.filter(order => order.id === item.id);
 
       if (found.length != 0) {
         found[0].quantity++;
       } else {
         let order = {
           id: item.id,
           title: item.title,
           unitPrice: item.price,
           quantity: 1
         };
         state.listOrder.push(order);
       }
    },
    decreaseQuantity(state, item){
      item.quantity--
      if(item.quantity===0){
        this.commit('removeItem', item)
      }
    },
    increaseQuantity(state, item){
      item.quantity++
    },
    removeItem(state, item){
      let index= state.listOrder.findIndex((item)=>item.id === item.id)
      state.listOrder.splice(index, 1)
    },
  },
  //llamada a la base de datos cuando la tenga lista, porque las pizza tienen otra categorias...
  actions:{
   async loadProducts(context){
      let response = await Vue.axios.get('products')
      context.commit('addProducts', response.data)
    }
  },
  getters:{
  
    listOrderCount(state){
      if(state.listOrder.length===0){
        return 0;
      }
      return (state.listOrder.map((item)=>item.quantity)).reduce((acum, current)=> acum + current)
    }
  }
});
Vue.filter('toMoney', function(value){
  return new Intl.NumberFormat("es-ES", {style: "currency", currency:"EUR"}).format(value)
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products:[],
    listOrder:[],
    token:"",
    isAuth: false,
    userLogged: {
      id: null,
      firstname: null,
      profile: "",
    },
  },
  mutations:{
    addProducts(state, payload) {
      state.products = payload;
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
      if(item.quantity<=0){
        this.commit("removeItem", item)
      }
    },
    increaseQuantity(state, item){
      item.quantity++
    },
    removeItem(state, item){
      let index= state.listOrder.findIndex((item)=>item.id===item.id)
      state.listOrder.splice(index, 1)
    },
    setCurrentUser(state, userInfo){
       state.isAuth = (userInfo !== null)
      if(userInfo){      
       state.userLogged = userInfo
       state.userLogged.firstname = "maria victoria"
       state.userLogged.profile = userInfo.profile || "user"
      }
      if(!userInfo){
        state.userLogged = null
      }
    },

    checkToken(state){
      let token = window.localStorage.getItem('token')
      if(token){
        this.commit('setToken', token)
      }
    }
  }, 
  actions:{
    async loadProducts(context){
      let response = await Vue.axios.get('products')
      console.log(response.data)
      context.commit('addProducts', response.data)
    }
  },
  getters:{
    listOrderCount(state){
      if(state.listOrder.length === 0){
        return 0;
      }
      return (state.listOrder.map((item)=> item.quantity)).reduce((acum, current)=> acum + current)
    }
  }
});
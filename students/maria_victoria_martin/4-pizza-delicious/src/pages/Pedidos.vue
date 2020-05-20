<template>
  <div>
    <Showcase :img="img" :intro="intro"></Showcase>
    <OrderList :categories="categories" :products="productsFiltered" :current="currentCategory" @change="changeCurrentCategory" @add="addToCart" ></OrderList>
    <OrderCart :order = "listOrder" :total="totalPrice"  @decrease="decreaseQuantity" @increase="increaseQuantity" @remove="removeItem"></OrderCart>
  
  </div>
</template>

<script>
import Showcase from '@/components/Showcase'
import OrderList from '@/components/OrderList'
import OrderCart from '@/components/OrderCart'

export default {
  
  name: 'Pedidos',
  data(){
    return{
        img:"images/bg_3.jpg",
        intro:"Our products",

      currentCategory:"pizza",
      categories:[
        {id: 1, title:"Pizza", slug:"pizza"},
        {id: 2, title:"Drinks", slug:"drinks"},
        {id: 3, title:"Burgers", slug:"burgers"},
        {id: 4, title:"Pasta", slug:"pasta"}
      ],
    }
  },
    computed:{
    products(){
      return this.$store.state.products
     },
     listOrder(){
       return this.$store.state.listOrder
     },
    productsFiltered(){  
        return this.products.filter(item=> item.category === this.currentCategory)
    },
     totalPrice(){
      if(this.listOrder.length===0){
         return 0;
      }
      let total = this.listOrder.map((item)=> item.unitPrice * item.quantity)
      total= total.reduce((sum,current)=> sum + current)
      return total
    }
  },
  methods:{
    changeCurrentCategory(slug){
          this.currentCategory = slug
    },
    addToCart(item) {
      this.$store.commit('addToCart', item)
    },
    decreaseQuantity(item){
      this.$store.commit('decreaseQuantity', item)
    },
    increaseQuantity(item){
      this.$store.commit('increaseQuantity', item)
    },
    removeItem(item){
      this.$store.commit('removeItem')
    }
  },
  components: {
    Showcase,
    OrderList,
    OrderCart,
  }
}
</script>
<template>
<body>

<Showcase :img="img" title="Tienda de productos" desc="Esta es una tienda de productos" size="size"></Showcase>
<MainProducts :categories="categories" :current="currentCategory" @change="changeCurrentCategory"
:products="productsFiltered" @add="addToCart" ></MainProducts>
<CartProducts :order="listOrder" :total="totalPrice" @decrease="decreaseQuantity" @aumentar="increaseQuantity" @remove="removeItem"></CartProducts>
 
</body>
</template>

<script>

import MainProducts  from '@/components/MainProducts'
import CartProducts  from '@/partials/CartProducts'
import Showcase from '@/components/Showcase'


export default {
 
  name: 'Home',
  data(){
    return{
    currentCategory:"all",
     categories:[
       {id:1, title:"all", slug:"all"},
       {id:2, title:"shirt", slug:"shirt"},
       {id:3, title:"sport wear", slug:"sport wear"},
       {id:4, title:"outwears", slug:"outwears"},
     ],
     img:"img/showcase.jpg"
    }
  },
  methods:{
    changeCurrentCategory(slug){
      this.currentCategory = slug
    },
    addToCart(item){
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
  computed:{
     products(){
      return this.$store.state.products
    },
    listOrder(){
      return this.$store.state.listOrder
    },
    productsFiltered(){
      if(this.currentCategory==="all"){
        return this.products 
      }
        return this.products.filter(item=> item.category === this.currentCategory)
    },
    totalPrice(){
      if(this.listOrder.length===0){
         return 0;
      }
      let total = this.listOrder.map((item)=> item.unitPrice * item.quantity)
      total = total.reduce((sum, current)=>sum + current)
      return total
    }
  },
  components: {
     MainProducts,
     CartProducts,
     Showcase
  },
}
</script>
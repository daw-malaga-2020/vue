<template>
<div>
   <MainSlider :mainTitleSlider="mainTitleSlider" :img="img" >

   
  </MainSlider>
  <MainMenu  :menu="menu" :productsFiltered="productsFiltered" @change="changeCurrentCategory" @add="addToCart"/>
  <SectionOrder :order="listOrder" :totalPrice="totalPrice" @sum="sumQuantity" @decrease="decreaseQuantity" @remove="removeProduct"/>
  
</div>
</template>

<script>

import MainSlider from '../components/MainSlider'
import MainMenu from '../components/MainMenu'
import SectionOrder from '../components/SectionOrder'


export default {
  name:"OrderPage",
  data(){
    return{
      img:"/images/bg_1.png",
      mainTitleSlider:"Our Products",
      currentCategory:"pizza",
      menu:[
        {id:"v-pills-1-tab",  name:"Pizza" , category:"pizza"},
        {id:"v-pills-2-tab",  name:"Drinks", category:"drink"},
        {id:"v-pills-3-tab", name:"Burgers", category:"burger"},
        {id:"v-pills-4-tab", name:"Pasta", category:"pasta"}
      ],
      
    }
  },
  computed:{
    
    products(){
      return this.$store.state.products
    },
    productsFiltered(){
      return this.products.filter( item => item.category === this.currentCategory)
    },
    listOrder(){
      return this.$store.state.listOrder
    },
    totalPrice(){
      if(this.listOrder.length ===0){
        return 0
      }
      let total = this.listOrder.map((item) => item.unitPrice* item.quantity)
      total = total.reduce((sum,current)=> sum + current)
      return total
    },
  },
  methods:{
    changeCurrentCategory(category){
      this.currentCategory= category
    },
    addToCart(item){

      this.$store.commit("addToCart", item)
    },
    sumQuantity(product){
      this.$store.commit("sumQuantity", product)
    },
    decreaseQuantity(product){
      this.$store.commit("decreaseQuantity", product)
    },
    removeProduct(product){
      this.$store.commit("removeProduct", product)
    }
  },
  components: {
    MainSlider,
    MainMenu,
    SectionOrder,
  }
}
</script>
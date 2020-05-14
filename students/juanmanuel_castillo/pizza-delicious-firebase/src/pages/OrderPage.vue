<template>
	<div>

		<MainSlider
        subheading="Our products" 
        image="/images/bg_3.jpg"
        size="small"
     />

    <!-- MenuList -->
    <MenuList  :categories="categories" :products="productsFiltered" :current="currentCategory" @change="changeCurrentCategory" @add="addToCart"/>
    <!-- OrderList -->
    <OrderList  :order = "listOrder" 
                :total="totalPrice"  
                @decrease="decreaseQuantity" 
                @increase="increaseQuantity" 
                @remove="removeItem"
                @process="processOrder">
    </OrderList>
    
  </div>
</template>
<script>
import MainSlider from "@/components/MainSlider";
import MenuList from "@/components/MenuList"
import OrderList from "@/components/OrderList"
import {Db} from "@/modules/firebase"

export default {
  data() {
    return {
      currentCategory: "pizza",
      categories: [],
      /*
      { title: "Pizza", id: 1, slug: "pizza" },
        { title: "Pasta", id: 2, slug: "pasta" },
        { title: "Burgers", id: 3, slug: "burgers" },
        { title: "Drinks", id: 4, slug: "drink" }
      */
    };
  },
  computed: {
    products(){
      return this.$store.state.products
    },
    
    listOrder(){
      return this.$store.state.listOrder
    },
    productsFiltered() {
      return this.products.filter(
        item => item.category === this.currentCategory
      );
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
  methods: {
    async processOrder(userInfo){
        let orderData = {
          id: (new Date()).getTime(),
          total: this.totalPrice,
          products: this.listOrder,
          user: userInfo,
          status: 1,
          created_at: (new Date()).getTime(),
          delivery_at: null
        }
        let config = {
          headers: {
              'Authorization': `Bearer ${window.localStorage.getItem("token")}`
          }
        }
        let response = await this.$http.post("orders", orderData, config)
        this.$store.commit("emptyCart")
        this.$swal("Your order was sent")
          this.$router.push("/myorders")
    },
    changeCurrentCategory(slug) {
      this.currentCategory = slug;
    },
    addToCart(item) {
     this.$store.commit("addToCart", item)
    },
    decreaseQuantity(item){
      this.$store.commit('decreaseQuantity', item)
    },
    increaseQuantity(item){
      this.$store.commit('increaseQuantity', item)
    },
    removeItem(item){
      this.$store.commit('removeItem', item)
      
    }
  },
  components: {
    MainSlider,
    MenuList,
    OrderList
  },
  firestore() {
    return {
        categories: Db.collection('categories').orderBy('title')
    }
}
};
</script>
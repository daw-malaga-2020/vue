<template>
	<div>

		<MainSlider />

    <!-- MenuList -->
    <MenuList  :categories="categories" :products="productsFiltered" :current="currentCategory" @change="changeCurrentCategory" @add="addToCart"/>
    <!-- OrderList -->
    <OrderList :order = "listOrder" :total="totalPrice"  @decrease="decreaseQuantity" @increase="increaseQuantity" @remove="removeItem"></OrderList>
    
    
  </div>
</template>
<script>
import MainSlider from "@/components/MainSlider";
import MenuList from "@/components/MenuList"
import OrderList from "@/components/OrderList"

export default {
  data() {
    return {
      listOrder: [],
      currentCategory: "pizza",
      categories: [
        { title: "Pizza", id: 1, slug: "pizza" },
        { title: "Pasta", id: 2, slug: "pasta" },
        { title: "Burgers", id: 3, slug: "burgers" },
        { title: "Drinks", id: 4, slug: "drink" }
      ],
    };
  },
  computed: {
    products(){
      return this.$store.state.products
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
    changeCurrentCategory(slug) {
      this.currentCategory = slug;
    },
    addToCart(item) {
      let found = this.listOrder.filter(order => order.id === item.id);

      if (found.length != 0) {
        found[0].quantity++;
      } else {
        let order = {
          id: item.id,
          title: item.title,
          unitPrice: item.price,
          quantity: 1
        };
        this.listOrder.push(order);
      }
    },
    decreaseQuantity(item){
      item.quantity--
      if(item.quantity<=0){
        this.removeItem(item)
      }
    },
    increaseQuantity(item){
      item.quantity++
    },
    removeItem(item){
      let index= this.listOrder.findIndex((item)=>item.id===item.id)
      this.listOrder.splice(index, 1)
    }
  },
  components: {
    MainSlider,
    MenuList,
    OrderList
  }
};
</script>
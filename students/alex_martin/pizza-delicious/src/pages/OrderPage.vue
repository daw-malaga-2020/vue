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
      products: [
        {
          id: 1,
          category: "pizza",
          title: "Pizza 1",
          img: "images/pizza-1.jpg",
          desc: "Esta es una pizza 1",
          price: 10
        },
        {
          id: 2,
          category: "pizza",
          title: "Pizza 2",
          img: "images/pizza-2.jpg",
          desc: "Esta es una pizza 2",
          price: 9
        },
        {
          id: 3,
          category: "pizza",
          title: "Pizza 3",
          img: "images/pizza-3.jpg",
          desc: "Esta es una pizza 3",
          price: 7
        },
        {
          id: 4,
          category: "pizza",
          title: "Pizza 4",
          img: "images/pizza-4.jpg",
          desc: "Esta es una pizza 4",
          price: 11
        },
        {
          id: 5,
          category: "pizza",
          title: "Pizza 5",
          img: "images/pizza-5.jpg",
          desc: "Esta es una pizza 5",
          price: 15
        },
        {
          id: 6,
          category: "pizza",
          title: "Pizza 6",
          img: "images/pizza-6.jpg",
          desc: "Esta es una pizza 6",
          price: 6
        },
        {
          id: 7,
          category: "pizza",
          title: "Pizza 7",
          img: "images/pizza-7.jpg",
          desc: "Esta es una pizza 7",
          price: 9
        },
        {
          id: 8,
          category: "pizza",
          title: "Pizza 8",
          img: "images/pizza-8.jpg",
          desc: "Esta es una pizza 8",
          price: 10
        },
        {
          id: 9,
          category: "pasta",
          title: "Pasta 1 ",
          img: "images/pasta-1.jpg",
          desc: "Esta es pasta 1",
          price: 9
        },
        {
          id: 10,
          category: "pasta",
          title: "Pasta 2 ",
          img: "images/pasta-2.jpg",
          desc: "Esta es pasta 2",
          price: 9
        },
        {
          id: 11,
          category: "pasta",
          title: "Pasta 3 ",
          img: "images/pasta-3.jpg",
          desc: "Esta es pasta 3",
          price: 9
        },
        {
          id: 12,
          category: "drink",
          title: "Bebida 1 ",
          img: "images/drink-1.jpg",
          desc: "Esta es pasta 1",
          price: 4
        },
        {
          id: 13,
          category: "drink",
          title: "Bebida 2 ",
          img: "images/drink-2.jpg",
          desc: "Esta es pasta 2",
          price: 3
        },
        {
          id: 14,
          category: "drink",
          title: "Bebida 3 ",
          img: "images/drink-3.jpg",
          desc: "Esta es pasta 3",
          price: 2
        }
      ]
    };
  },
  computed: {
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
<template>
  <div>
    <MainSlider subheading="Our products" image="/images/bg_3.jpg" size="small" />

    <!-- MenuList -->
    <MenuList
      :categories="categories"
      :products="productsFiltered"
      :current="currentCategory"
      @change="changeCurrentCategory"
      @add="addToCart"
    />
    <!-- OrderList -->
    <OrderList
      :order="listOrder"
      :total="totalPrice"
      @decrease="decreaseQuantity"
      @increase="increaseQuantity"
      @remove="removeItem"
      @process="processOrder"
    ></OrderList>
  </div>
</template>
<script>
import MainSlider from "@/components/MainSlider";
import MenuList from "@/components/MenuList";
import OrderList from "@/components/OrderList";

export default {
  data() {
    return {
      currentCategory: "pizza"
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    categories() {
      return this.$store.state.categories;
    },
    listOrder() {
      return this.$store.state.listOrder;
    },
    productsFiltered() {
      return this.products.filter(
        item => item.category === this.currentCategory
      );
    },
    totalPrice() {
      if (this.listOrder.length === 0) {
        return 0;
      }
      let total = this.listOrder.map(item => item.unitPrice * item.quantity);
      total = total.reduce((sum, current) => sum + current);

      return total;
    }
  },
  methods: {
    async processOrder(userInfo) {
      let orderData = {
        total: this.totalPrice,
        products: this.listOrder,
        user: userInfo,
        status: 1,
        created_at: new Date().getTime(),
        delivery_at: null
      };

      try {
        await this.$fireStore.collection("orders").add(orderData);

        console.info("pedido registrado en firebase")
        this.$store.commit("emptyCart");
        this.$swal("Your order was sent");
        this.$router.push("/myorders");
      } catch (e) {
        console.error(e)
      }
    },
    changeCurrentCategory(slug) {
      this.currentCategory = slug;
    },
    addToCart(item) {
      this.$store.commit("addToCart", item);
    },
    decreaseQuantity(item) {
      this.$store.commit("decreaseQuantity", item);
    },
    increaseQuantity(item) {
      this.$store.commit("increaseQuantity", item);
    },
    removeItem(item) {
      this.$store.commit("removeItem", item);
    }
  },
  components: {
    MainSlider,
    MenuList,
    OrderList
  }
};
</script>

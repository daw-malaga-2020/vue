<template>
<div>
    <section class="ftco-intro">
    <div class="container-wrap">
      <div class="wrap d-md-flex">
        <div class="info">
          <div class="row no-gutters">
            <div class="col-md-4 d-flex">
              <div class="text">
                <h3>YOU ORDER</h3>
                <p>Add your delicious order and press "Order" button </p>
              </div>
            </div>
            <div class="col-md-8 d-flex">
              <div class="text">
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in order" :key="product.id">
                      <td>{{product.title}}</td>
                      <td>{{product.quantity}} <button @click="sumQuantity(product)">+</button><button @click="decreaseQuantity(product)">-</button> </td>
                      <td>{{product.unitPrice *product.quantity| toMoney}}</td>
                      <td> <button @click="removeProduct(product)">X</button> </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="social d-md-flex pl-md-5 p-4 align-items-center">
          <div class="text">
            <h2>TOTAL</h2>
            <h4>{{totalPrice | toMoney}}</h4>
          </div>
          <a href="#" class="p-3 px-xl-4 py-xl-3 btn-white btn btn-outline-white">Order Now</a>
        </div>
      </div>
    </div>

  </section>
</div>
</template>
<script>
export default {
  props:["order", "totalPrice",],
  methods:{
    sumQuantity(product){
      this.$emit("sum", product)
    },
    decreaseQuantity(product){
      this.$emit("decrease", product)
    },
    removeProduct(product){
      this.$emit("remove", product)
    }
  }
}
</script>
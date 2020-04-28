<template>
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
                  <table class="table table-sm" v-if="order.length">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in order" :key="item.id">
                        <td>{{item.title}} </td>
                        <td>{{item.quantity}} <button @click="decreaseQuantity(item)">-</button> <button @click="increaseQuantity(item)">+</button></td>
                        <td>{{item.unitPrice * item.quantity | toMoney}}</td>
                        <td> <button @click="removeItem(item)">X</button> </td>
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
              <h4>{{total | toMoney}}</h4>
            </div>
            <a href="#" class="p-3 px-xl-4 py-xl-3 btn-white btn btn-outline-white">Order Now</a>
          </div>
        </div>
      </div>

    </section>
</template>

<script>


export default {
  props: ["order","total"],
  methods: {
    decreaseQuantity(item){
      this.$emit("decrease", item)
    },
    increaseQuantity(item){
      this.$emit("increase", item)
    },
    removeItem(item){
      this.$emit("remove", item)
    }
  }  
}
</script>
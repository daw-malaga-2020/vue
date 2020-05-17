<template>
    <section class="ftco-intro" v-if="order.length">
  <div class="container">
    <div class="navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">
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
                    <th scope="col"></th>

                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in order" :key="item.id">
                    <td>{{item.title}}</td>
                    <td>{{item.quantity}}
                      <button @click.prevent="decreaseQuantity(item)">-</button> 
                      <button @click.prevent="increaseQuantity(item)">+</button>
                      </td> 
                    <td>{{item.unitPrice * item.quantity || toMoney}}</td>
                    <td> <button @click.prevent="removeItem">X</button></td>
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
  props:["order", "total"],
   methods: {
    decreaseQuantity(item){
      this.$emit('decrease', item)
    },
    increaseQuantity(item){
      this.$emit('aumentar', item)
    },
    removeItem(item){
      this.$emit('remove', item)
    }
  }   
}
</script>
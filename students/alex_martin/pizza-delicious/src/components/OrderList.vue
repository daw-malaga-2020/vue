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
            <a href="#" @click.prevent="openProcessForm" class="p-3 px-xl-4 py-xl-3 btn-white btn btn-outline-white">Order Now</a>
          </div>
        </div>
      </div>

        <b-modal id="order-process" title="Order Process" class="bg-dark">
            <p>Please, complete your address to process the order</p>
            <form action="#" class="contact-form">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" v-model="userInfo.name" class="form-control" placeholder="Your Name">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" v-model="userInfo.lastname" class="form-control" placeholder="Your surname">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" v-model="userInfo.address" class="form-control" placeholder="Your address">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" v-model="userInfo.phone" class="form-control" placeholder="Your phone">
                        </div>
                    </div>
                </div>
            </form>

            <template v-slot:modal-footer>
                <div class="text-right">
                    <input type="submit" @click.prevent="processOrder" value="Process order" class="btn btn-primary py-3 px-5">
                </div>
            </template>

        </b-modal>

    </section>
</template>

<script>


export default {
  props: ["order","total"],
  data(){
    return {
      userInfo: {
        name: "",
        lastname: "",
        address: "",
        phone: ""
      }
    }
  },
  methods: {
    openProcessForm(){
        if (!this.$store.state.isAuth){
          this.$swal('Opps','You need login to process orders', "error");
        }else{
          this.$bvModal.show("order-process")
        }
    },
    processOrder(){
      this.$emit("process", this.userInfo)
    },
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

<style>
    .modal-body {
        background-color: #1d2124;
    }
</style>
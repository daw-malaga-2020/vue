<template>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4>
                        Listado de pedidos
                    </h4>
                </div>
                <div class="col-md-8">
                    <h4>My orders</h4>
                    <table class="table text-white">
                        <thead>
                        <tr>
                            <th>Order Num.</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Details</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="item in orders" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.user.name}} {{item.user.lastname}}</td>
                            <td>{{item.created_at | moment("from", "now")}}</td>
                            <td>{{item.total | toMoney }}</td>
                            <td>{{item.status}}</td>
                            <td><a href="#" class="btn btn-white btn-outline-white" @click.prevent="currentOrder=item">View
                                details</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-4" v-if="currentOrder">
                    <h4>Order Detail</h4>
                    <table class="table text-white">
                        <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="item in currentOrder.products" :key="item.id">
                            <td>{{item.title}}</td>
                            <td>{{item.quantity}}</td>
                        </tr>
                        </tbody>
                    </table>
                    <h6 class="text-right">Total: {{currentOrder.total | toMoney}}</h6>
                    <h4>Estado del pedido</h4>
                    <select v-model="currentOrder.status" @change="changeStatus">
                        <option value="1">En proceso</option>
                        <option value="2">Enviado</option>
                        <option value="3">Cancelado</option>
                    </select>
            </div>
            </div>
        </div>
</template>

<script>
import jwtDecode from "jwt-decode";
export default {
  name: "AdminOrders",
  data() {
    return {
      currentOrder: null,
      orders: []
    };
  },
  computed: {
    user() {
      return this.$store.state.userLogged.firstname;
    }
  },
  methods: {
    changeStatus() {
      let orderData = { status: this.currentOrder.status };
      let token = this.$store.state.token;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      this.$http.put(`orders/${this.currentOrder.id}`, orderData, config);
    }
  },
  async mounted() {
    if (this.$store.state.userLogged.profile !== "admin") {
      this.$swal("Access denied", "You are not allowed stay here", "error");
      this.$router.push("/");
    }

    let token = this.$store.state.token;
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    let response = await this.$http.get("orders", config);
    this.orders = response.data;
  }
};
</script>

<style scoped>
.list-group-item {
  background-color: transparent;
}
</style>
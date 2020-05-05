<template>
    <section class="ftco-section order-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4>
                        Pedidos de {{user}}
                    </h4>
                </div>
                <div class="col-md-6">
                    <h4>My orders</h4>
                    <table class="table text-white">
                        <thead>
                        <tr>
                            <th>Order Num.</th>
                            <th>Fecha</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Details</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="item in orders" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.created_at | moment("from", "now")}}</td>
                            <td>{{item.total | toMoney }}</td>
                            <td>{{item.status}}</td>
                            <td><a href="#" class="btn btn-white btn-outline-white" @click="currentOrder=item">View
                                details</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-6" v-if="currentOrder">
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
            </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "MyOrders",
        data() {
            return {
                currentOrder: null,
                orders: []
            }
        },
        computed:{
            user(){
                return this.$store.state.userLogged.firstname
            }
        },
        async mounted() {

            if(this.$store.state.userLogged.profile === "admin"){
                this.$router.push("/admin")
            }

            let token = this.$store.state.token
            let config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            let response = await this.$http.get("orders", config)
            this.orders = response.data
        }
    }
</script>

<style scoped>
    .list-group-item {
        background-color: transparent;
    }
</style>
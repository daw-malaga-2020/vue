<template>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4>
                        Listado de productos
                    </h4>
                </div>
                <div class="col-md-6">
                    <select v-model="currentCategory" class="form-control">
                        <option class="bg-dark" value="pizza">Show pizzas</option>
                        <option class="bg-dark" value="pasta">Show pastas</option>
                        <option class="bg-dark" value="burger">Show Burger</option>
                        <option class="bg-dark" value="drink">Show Drinks</option>
                    </select>
                    <table class="table text-white">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Details</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="item in productsFiltered" :key="item.id">
                            <td class="w-25"><img :src="item.image" class="img-thumbnail"></td>
                            <td>{{item.title}}</td>
                            <td>{{item.category}}</td>
                            <td><a href="#" class="btn btn-white btn-outline-white" @click.prevent="currentProduct={...item}">View details</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-6" v-if="currentProduct">
                    <h4>Product Detail</h4>
                    <form action="#" class="contact-form">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" v-model="currentProduct.title" class="form-control" placeholder="Product name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <select v-model="currentProduct.category" class="form-control">
                                        <option value="pizza" class="bg-dark">Pizzas</option>
                                        <option value="pasta" class="bg-dark">Pasta</option>
                                        <option value="burger" class="bg-dark">Hamburguersa</option>
                                        <option value="drink" class="bg-dark">Bebidas</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" v-model="currentProduct.price" class="form-control" placeholder="Subject">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" v-model="currentProduct.image" class="form-control" placeholder="Subject">
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                                <textarea v-model="currentProduct.desc" id="" cols="30" rows="7" class="form-control"
                                          placeholder="Message"></textarea>
                        </div>
                        <div class="form-group">
                            <input type="submit" @click.prevent="saveProduct" value="Save" class="btn btn-primary py-3 px-5">
                        </div>
                    </form>
            </div>
            </div>
        </div>
</template>

<script>
import jwtDecode from "jwt-decode";
export default {
  name: "AdminMenu",
  data() {
    return {
      currentCategory: "pizza",
      currentProduct: null,
    };
  },
  computed: {
    productsFiltered() {
      return this.products.filter(
        item => item.category === this.currentCategory
      );
    },
    user() {
      return this.$store.state.userLogged.firstname;
    },
    products(){
        return this.$store.state.products   
    }
  },
  methods: {
    async saveProduct() {
      let token = this.$store.state.token;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      let response = await this.$http.put(
        `products/${this.currentProduct.id}`,
        this.currentProduct,
        config
      );
      this.$store.dispatch("loadProducts");
    },
  }
};
</script>

<style scoped>
.list-group-item {
  background-color: transparent;
}
</style>
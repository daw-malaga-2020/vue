<template>

    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">
        <span class="navbar-brand">Categories:</span>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link d-sm-inline-block" href="#" v-for="item in categories" :key="item.id"  :class="{active: item.slug === current}"  @click.prevent="changeCurrentCategory(item.slug)">{{item.title}}
               </a>
            </li>
          </ul>

          <!-- Search -->
          <form class="form-inline">
            <div class="md-form my-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            </div>
          </form>

      </nav>

      <!--Section: Products v.3-->
      <section class="text-center mb-4">
        <div class="row wow fadeIn">
          <div class="col-lg-3 col-md-6 mb-4">
            <!--Card-->
            <div class="card">
             <CardProduct v-for="item in products" :key="item.id"
              :img="item.img"
              :category="item.category"
              :title="item.title"
              :price="item.price"
              @click="addToCart(item)"
            ></CardProduct>
            </div>
           </div>
        </div>
      </section>
      <!--Pagination-->
      <nav class="d-flex justify-content-center wow fadeIn">
        <ul class="pagination pg-blue">

          <!--Arrow left-->
          <li class="page-item disabled">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>

          <li class="page-item active">
            <a class="page-link" href="#">1
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">5</a>
          </li>

          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
      <!--Pagination-->

    </div>
 

</template>
<script>

import CardProduct from '@/partials/CardProduct'

export default {
  props:["categories", "products", "current"],
  components:{
    CardProduct,
  },
  methods:{
    changeCurrentCategory(slug){
      this.$emit("change", slug)
    },
    addToCart(item){
      this.$emit("add", item)
    }
  }

}
</script>
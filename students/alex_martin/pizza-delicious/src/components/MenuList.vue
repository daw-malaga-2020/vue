<template>
  <section class="ftco-menu">
        <div class="container-fluid">
          <div class="row d-md-flex">
            <div class="col-lg-12  p-md-5">
              <div class="row">
                <div class="col-md-12 nav-link-wrap mb-5 d-flex">
                  <div class="nav  nav-pills mx-auto" >
                    <a
                      v-for="category in categories" :key="category.id" 
                      class="nav-link" :class="{active: category.slug === current}"
                      href="#" @click.prevent="changeCurrentCategory(category.slug)"
                      >{{category.title}}</a
                    >          
                  </div>
                </div>
                <div class="col-md-12">
                      <div class="row">
                          <ProductItem v-for="item in products" :key="item.id"
                          :title="item.title" :img="item.img" :price="item.price" :desc="item.desc" @click="addToCart(item)"/>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
    </section>
</template>
<script>

import ProductItem from '@/partials/ProductItem'
export default {
	props: ["categories", "products","current"],
	components: {
		ProductItem
	},
    methods: {
      changeCurrentCategory(slug){
        this.$emit("change", slug)
      },
      addToCart(item){
        this.$emit("add",item)
      }
    }
}
</script>
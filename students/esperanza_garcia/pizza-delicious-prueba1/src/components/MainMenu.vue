<template>
<div>
  <section class="ftco-menu">
        <div class="container-fluid">
          <div class="row d-md-flex">
            <div class="col-lg-12  p-md-5">
              <div class="row">
                <div class="col-md-12 nav-link-wrap mb-5 d-flex">
                </div>
                  <!-- <div
                      class="nav  nav-pills mx-auto"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <a
                        class="nav-link active"
                        id="v-pills-1-tab"
                        data-toggle="pill"
                        href="#v-pills-1"
                        role="tab"
                        aria-controls="v-pills-1"
                        aria-selected="true"
                        >Pizza</a
                      >
      
                      <a
                        class="nav-link"
                        id="v-pills-2-tab"
                        data-toggle="pill"
                        href="#v-pills-2"
                        role="tab"
                        aria-controls="v-pills-2"
                        aria-selected="false"
                        >Drinks</a
                      >
      
                      <a
                        class="nav-link"
                        id="v-pills-3-tab"
                        data-toggle="pill"
                        href="#v-pills-3"
                        role="tab"
                        aria-controls="v-pills-3"
                        aria-selected="false"
                        >Burgers</a
                      >
      
                      <a
                        class="nav-link"
                        id="v-pills-4-tab"
                        data-toggle="pill"
                        href="#v-pills-4"
                        role="tab"
                        aria-controls="v-pills-4"
                        aria-selected="false"
                        >Pasta</a
                      >
                  </div> -->


                  <div class="col-md-12 nav-link-wrap mb-5 d-flex">
                    <div
                      class="nav  nav-pills mx-auto"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical">
                  
                      <a class="nav-link" data-toggle="pill" role="tab" href="#" v-for="item in menu" :key="item.id" @click.prevent="changeCategory(item.category)" >{{item.name}}</a>
                    
                    </div>
                  </div>
                
                <div class="col-md-12 d-flex align-items-center">
                  <div class="tab-content " id="v-pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="v-pills-1"
                      role="tabpanel"
                      aria-labelledby="v-pills-1-tab">
                      <div class="row">
                        <ProductItem v-for="item in productsFiltered" :key="item.id" :img="item.image" :desc="item.desc" :title="item.title" :price="item.price" @click="addToCart(item)" ></ProductItem>
                        
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>      
</div>
</template>
<script>
import ProductItem from '../partials/ProductItem'

export default {
  name:"MainMenu",
  props: ["menu", "productsFiltered"],
  methods: {
    changeCategory(category){
      this.$emit("change", category)
    },
    addToCart(item){
      this.$emit("add", item)
    }
  }, 
  components:{
      ProductItem
  }

}
</script>
<template>
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
                  
                    <a class="nav-link" data-toggle="pill" role="tab" v-for="item in menu" :key="item.id" :href="item.href" :ariaControls="item.ariaControls" :ariaSelected="item.ariaSelected" @click="category=item.category">{{item.name}}</a>
                    
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
                        <ProductItem v-for="item in productsFiltered" :key="item.id" :img="item.img" :description="item.description" :name="item.name" :price="item.price" ></ProductItem>
                        
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</section>
</template>
<script>
import ProductItem from '../partials/ProductItem'

export default {
  name:"MainMenu",
  data(){
    return{
      category:"pizza",
      products:[
        {id:1, category:"pizza", name:"Italian Pizza", description:"pizza de italia con tomate y orégano", price:"2.90", img:"xxx", href:"#v-pills-1"},
        {id:2, category:"pizza", name:"Italian Pizza", description:"pizza de italia con tomate y orégano", price:"2.90", img:"xxx", href:"#v-pills-2"},
        {id:3, category:"pizza", name:"Italian Pizza", description:"pizza de italia con tomate y orégano", price:"2.90", img:"xxx", href:"#v-pills-3"},
        {id:4, category:"drinks", name:"Wine", description:"pizza de italia con tomate y orégano", price:"2.90", img:"xxx", href:"#v-pills-4"},
        {id:5, category:"drinks", name:"Wine", description:"pizza de italia con tomate y orégano", price:"2.90", img:"xxx", href:"#v-pills-4"},
        {id:6, category:"drinks", name:"Wine", description:"pizza de italia con tomate y orégano", price:"2.90", img:"xxx", href:"#v-pills-4"},

        {id:7, category:"burgers", name:"BigMac", description:"pizza de italia con tomate y orégano", price:"2.90", img:"xxx", href:"#v-pills-4"},
        {id:8, category:"burgers", name:"BigMac", description:"pizza de italia con tomate y orégano", price:"2.90", img:"xxx", href:"#v-pills-4"},
        {id:9, category:"pasta", name:"Boloñesa", description:"pizza de italia con tomate y orégano", price:"2.90", img:"xxx", href:"#v-pills-4"},
        {id:10, category:"pasta", name:"Boloñesa", description:"pizza de italia con tomate y orégano", price:"2.90", img:"xxx", href:"#v-pills-4"}

      ],
       menu:[
        {id:"v-pills-1-tab", href: "#v-pills-1", ariaControls:"v-pills-1", ariaSelected:"true", name:"Pizza" , category:"pizza"},
        {id:"v-pills-2-tab", href: "#v-pills-2", ariaControls:"v-pills-2", ariaSelected:"true", name:"Drinks", category:"drinks"},
        {id:"v-pills-3-tab", href: "#v-pills-3", ariaControls:"v-pills-3", ariaSelected:"true", name:"Burgers", category:"burgers"},
        {id:"v-pills-4-tab", href: "#v-pills-4", ariaControls:"v-pills-4", ariaSelected:"false", name:"Pasta", category:"pasta"}
      ]
    }
  },
  methods:{
    changeCategory(){
      console.log('el evento está saltando, este método no funciona')
      this.category= this.item.category
      return this.category
    }
  },
  computed:{
    productsFiltered(){
      
      return this.products.filter((item)=> item.category===this.category)
    }
  }, 
    components:{
      ProductItem
  }

}
</script>
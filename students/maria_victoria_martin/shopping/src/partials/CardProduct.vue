<template> 
    <!--Card-->
            <div class="card">

              <!--Card image-->
              <div class="view overlay">
                <img class="card-img-top"
                  :style='"background-image: url(" + img +");"'
                  alt="">

                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              <!--Card image-->

              <!--Card content-->
              <div class="card-body text-center">
                <!--Category & Title-->
                <a href="" class="grey-text">
                  <h5>{{category}}</h5>
                </a>
                <h5>
                  <strong>
                    <a href="" class="dark-grey-text">{{title}}
                      <span class="badge badge-pill danger-color">NEW</span>
                    </a>
                  </strong>
                </h5>
                <h4 class="font-weight-bold blue-text">
                  <strong>{{price| toMoney}}</strong>
                </h4>
               <button @click.prevent="addToCart" class="mdb-color lighten-3 mt-3 mb-5">addToCart</button>
 
              </div>
              <!--Card content-->
            </div>
            <!--Card-->
</template>

<script>
export default {
  props:["img", "category", "title", "price"],
  methods:{
    addToCart(item){
      this.$emit("click")
    }
  }
}
</script>
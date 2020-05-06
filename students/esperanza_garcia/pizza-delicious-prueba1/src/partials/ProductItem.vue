<template>
  <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              :style='"background-image: url("+ img +");"'
                            ></a>
                            <div class="text">
                              <h3><a href="#">{{title}}</a></h3>
                              <p>
                                {{desc}}
                              </p>
                              <p class="price"><span>{{price}}</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white" @click.prevent="addToCart">Add to cart</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
</template>
<script>
export default {
  props:[ "img", "title", "desc", "price" ],
  methods:{
    addToCart(){
      this.$emit("click")
    }
  }
}
</script>
<template>
     <!-- Navbar -->
  <nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
    <div class="container">
      <router-link class="navbar-brand" to="/">LOGO</router-link>
      
      <!-- Links -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <router-link v-for="item in menu" :key="item.id"
                class="nav-link waves-effect d-sm-inline-block" :to="item.path">
                {{item.name}}
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
      </ul> 

        <!-- Right -->
        <ul class="navbar-nav nav-flex-icons">
          <li class="nav-item">
            <a class="nav-link waves-effect"  v-for="item in cart" :key="item.id">            

              <span v-show="item.id===1 && listOrderCount!== 0" class="badge red z-depth-1 mr-1">{{listOrderCount}}
                </span>
              <router-link class="fas fa-shopping-cart" to="/cart"></router-link>
              <span class="clearfix d-none d-sm-inline-block"> {{item.name}}</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="https://www.facebook.com/mdbootstrap" class="nav-link waves-effect" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="nav-item">
            <a href="https://twitter.com/MDBootstrap" class="nav-link waves-effect" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Navbar -->   
</template>

<script>

export default {
  props:["menu", "cart"],
  computed:{
    listOrderCount(){
      return this.$store.getters.listOrderCount
    }
  }
}
</script>
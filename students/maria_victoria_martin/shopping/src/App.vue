<template>
  <div id="app">
    <MainNav :menu="menu" :cart="cart"></MainNav>
    <router-view></router-view>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav'
import MainFooter from '@/components/MainFooter'

export default {
  name: 'App',
  data(){
    return{
       menu:[
      {id:1, path: "/", name: "Shop"},
      {id:2, path: "/products", name: "products"},
      {id:3, path: "/myorders", name: "My Orders"},

      ],
      cart:[
      {id:1, path: "/cart", name: "cart"},
      ]
    }
  },
  mounted(){
    this.$store.dispatch('loadProducts')
  },
  components: {
    MainNav,
    MainFooter,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

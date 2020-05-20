<template>

  <div id="app">
    <MainNav :menu="menu" />

    <nuxt />

    <MainFooter />
  </div>

</template>


<script>

import MainNav from "@/components/MainNav"
import MainFooter from "@/components/MainFooter"

export default {
  name: "App",
  data(){
    return {
      menu: [
        {id: 1, path: "/", name: "Home"},
        {id: 2, path: "/pedidos", name: "Pedidos"},
        {id: 3, path: "/blog", name: "Blog"},
        {id: 4, path: "/contacto", name: "Contacto"},
        {id: 5, path: "/myorders", name: "My Orders"}, 
      ]
    }
  },
  components: {
    MainNav, 
    MainFooter
  },
  async mounted(){
    this.$store.dispatch('loadProducts')
  }
};
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

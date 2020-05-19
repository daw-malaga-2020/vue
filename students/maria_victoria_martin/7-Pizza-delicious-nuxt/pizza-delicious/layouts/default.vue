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
  fetch(store){
    store.dispatch('loadProducts')
  },
  components: {
    MainNav,
    MainFooter
  },
};
</script>

<style lang="scss">
</style>

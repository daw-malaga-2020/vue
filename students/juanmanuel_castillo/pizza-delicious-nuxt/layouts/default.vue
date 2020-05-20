<template>
  <div id="app">

    <MainNav :menu="menu" />

    <div class="container">
      <nuxt />
    </div>

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
  async fetch(){
    await this.$store.dispatch('loadProducts')
    await this.$store.dispatch('loadCategories')
  }
};
</script>

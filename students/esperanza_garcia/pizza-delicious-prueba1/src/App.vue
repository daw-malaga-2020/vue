<template>
  <div id="app">
    <MainNav :menu="menu"></MainNav>

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
      menu: [
        {id:1, to: "/", name: "Home"},
        {id:2, to: "/contacto", name: "Contacto"},
        {id:3, to: "/blog", name: "Blog"},
        {id:4, to: "/pedidos", name: "Pedidos"},
        {id:5, to: "/mispedidos", name: "Mis Pedidos"}
      ]
    }
  },
  async mounted(){
    this.$store.dispatch('loadProducts')
  },
  components: {
    MainNav,
    MainFooter
  }
}
</script>

<style lang="scss">

</style>



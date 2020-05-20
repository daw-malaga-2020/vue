<template>
  <div id="app">
    <MainNav :menu="menu"></MainNav>
    <router-view></router-view>
    <MainFooter></MainFooter>

  </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue'
import MainFooter from '@/components/MainFooter'


export default {
  name: 'App',
  data(){
    return{
      menu:[
      {id:1, path: "/", name: "Home"},
      {id:2, path: "/pedidos", name:"Pedidos"},
      {id:3, path: "/blog", name:"Blog"},
      {id:4, path: "/myorders", name:"My Orders"},
      {id:5, path: "/contacto", name:"Contacto"},

      ],
      showcase:[
        {img:"@/images/image_5.jpg"}
      ]
    }
  },
  async mounted(){
     this.$store.dispatch('loadProducts'),
     this.$store.commit('checkToken')
  },
  components: {
    MainNav,
    MainFooter
  }
}
</script>

<style lang="scss">
</style>

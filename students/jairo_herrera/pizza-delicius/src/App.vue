<template>
  <div id="app">

    <MainNav />

    <router-view></router-view>

    <FooterUno />

  </div>
</template>

<script>
import MainNav from "@/components/MainNav"
import FooterUno from "@/components/FooterUno"
export default {
  name: "App",
  data(){
    return {
     
    }
  },
  components: {
    MainNav, 
    FooterUno,
  }
};
</script>

<style lang="scss">
</style>

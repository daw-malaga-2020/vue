<template>
  <div id="app">
    <MainNav />
    <router-view></router-view>
    <h3>Aqui el footer</h3>
  </div>
</template>

<script>
import MainNav from "@/components/MainNav"
export default {
  name: 'App',
  components: {
    MainNav
  }
}
</script>
<template>
  <div id="app">
    <!--<Home></Home>-->
    <Pedidos></Pedidos>
  </div>
</template>

<script>
import Home from './pages/Home'
import Pedidos from './pages/Pedidos'
import Contacto from './pages/Contacto'
import Blog from './pages/Blog'

export default {
  name: 'App',
  components: {
    Home,
    Pedidos
  }
}
</script>

<style lang="scss">
</style>

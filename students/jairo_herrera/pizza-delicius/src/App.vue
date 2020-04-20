<template>
  <div id="app">
    <Home></Home>
    <Pedidos></Pedidos>
    <Contacto></Contacto>
    <Blog></Blog>
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
    Pedidos,
    Contacto,
    Blog,
    
  }
}
</script>

<style lang="scss">
</style>

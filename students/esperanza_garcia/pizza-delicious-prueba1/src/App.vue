<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Orders from './pages/Orders'

export default {
  name: 'App',
  components: {
    Home,
    Blog,
    Contact,
    Orders,
  }
}
</script>

<style lang="scss">

</style>

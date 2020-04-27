<template>
  <div id="app">
        <MainNav></MainNav>
        <router-view></router-view>
        <MainFooter></MainFooter>
  </div>
</template>

<script>

import MainNav from '@/components/MainNav'
import MainFooter from '@/components/MainFooter'

export default {
  name: 'App',
  components: {
    MainNav,
    MainFooter
  }
}
</script>
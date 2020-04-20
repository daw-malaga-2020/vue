<template>
<div>
  <MainNav></MainNav>
  <MainSlider></MainSlider>
  <MainBlog></MainBlog>
  <MainFooter/>
</div>
</template>

<script>

import MainNav from '../components/MainNav'
import MainSlider from '../components/MainSlider'
import MainBlog from '../components/MainBlog'
import MainFooter from '../components/MainFooter'

export default {
  name:"Blog",
  components: {
    MainNav,
    MainSlider,
    MainBlog,
    MainFooter
  }
}
</script>
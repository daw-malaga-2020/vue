<template>
<div>
  <MainNav></MainNav>
  <MainSlider></MainSlider>
  <InfoRRSS/>
  <SectionPizzas/>
  <SectionServices/>
  <SectionBlog/>
  <MainFooter/>
</div>
</template>

<script>

import MainNav from '../components/MainNav'
import MainSlider from '../components/MainSlider'
import InfoRRSS from '../components/InfoRRSS'
import SectionPizzas from '../components/SectionPizzas'
import SectionServices from '../components/SectionServices'
import SectionBlog from '../components/SectionBlog'
import MainFooter from '../components/MainFooter'

export default {
  name:"Home",
  components: {
    MainNav,
    MainSlider,
    InfoRRSS,
    SectionPizzas,
    SectionServices,
    SectionBlog,
    MainFooter
  },
  data(){
    return{
      headingSection:"our menu pricing"
    }
  }
}
</script>
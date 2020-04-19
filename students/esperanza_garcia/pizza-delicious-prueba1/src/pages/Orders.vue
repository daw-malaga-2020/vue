<template>
<div>
  <MainNav></MainNav>
  <MainSlider/>
  <MainMenu/>
  <SectionOrder/>
  <MainFooter/>
</div>
</template>

<script>

import MainNav from '../components/MainNav'
import MainSlider from '../components/MainSlider'
import MainMenu from '../components/MainMenu'
import SectionOrder from '../components/SectionOrder'
import MainFooter from '../components/MainFooter'


export default {
  name:"Orders",
  components: {
    MainNav,
    MainSlider,
    MainMenu,
    SectionOrder,
    MainFooter
  }
}
</script>
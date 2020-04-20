<template>
<div>
  <MainNav></MainNav>
  <MainSlider/>
  <SectionContact/>
  <MainFooter/>
</div>
</template>

<script>

import MainNav from '../components/MainNav'
import MainSlider from '../components/MainSlider'
import SectionContact from '../components/SectionContact'
import MainFooter from '../components/MainFooter'

export default {
  name:"Contact",
  components: {
    MainNav,
    MainSlider,
    SectionContact,
    MainFooter
  }
}
</script>
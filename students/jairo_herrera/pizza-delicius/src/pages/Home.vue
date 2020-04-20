<template>
  <div>
    <MainNav></MainNav>
    <SliderSection></SliderSection>
    <IntroSection></IntroSection>
    <MidSection></MidSection>
    <ServicesSection></ServicesSection>
    <LastSection></LastSection>
    <FooterUno></FooterUno>


  </div>
</template>
<script>

import MainNav from '../components/MainNav'
import SliderSection from '../components/SliderSection'
import IntroSection from '../components/IntroSection'
import MidSection from '../components/MidSection'
import ServicesSection from '../components/ServicesSection'
import LastSection from '../components/LastSection'
import FooterUno from '../components/FooterUno'

export default {
  name: "Home",
  components: {
    MainNav,
    SliderSection,
    IntroSection,
    MidSection,
    ServicesSection,
    LastSection,
    FooterUno,

  }
}
</script>

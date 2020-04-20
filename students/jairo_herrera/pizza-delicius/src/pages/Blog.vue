<template>
  <div>
    <MainNav></MainNav>
    <SliderSection></SliderSection>
    <LastSection></LastSection>
    <FooterUno></FooterUno>
  </div>
</template>


<script>
import MainNav from '../components/MainNav'
import SliderSection from '../components/SliderSection'
import LastSection from '../components/LastSection'
import FooterUno from '../components/FooterUno'





export default {
  name: "Blog",
  components: {
    MainNav,
    SliderSection,
    LastSection,
    FooterUno,
    

  }
}
</script>
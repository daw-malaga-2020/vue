<template>
  <div>
    <MainNav></MainNav>
    <SliderSection></SliderSection>
    <ContactSection></ContactSection>
    <FooterUno></FooterUno>
  </div>
</template>


<script>
import MainNav from '../components/MainNav'
import SliderSection from '../components/SliderSection'
import FooterUno from '../components/FooterUno'
import ContactSection from '../components/ContactSection'






export default {
  name: "Contacto",
  components: {
    MainNav,
    SliderSection,
    ContactSection,
    FooterUno,
    

  }
}
</script>
<template>
  <div>
    <MainNav></MainNav>
    <SliderSection></SliderSection>
    <Menu></Menu>
    <LastSection></LastSection>
    <FooterUno></FooterUno>
  </div>
</template>


<script>
import MainNav from '../components/MainNav'
import SliderSection from '../components/SliderSection'
import Menu from '../components/Menu'
import LastSection from '../components/LastSection'
import FooterUno from '../components/FooterUno'





export default {
  name: "Pedidos",
  components: {
    MainNav,
    SliderSection,
    Menu,
    LastSection,
    FooterUno,
    

  }
}
</script>
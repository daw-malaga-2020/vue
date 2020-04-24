<template>
  <div>
    <Navbar></Navbar>
    <Slider></Slider>
    <FirstSection></FirstSection>
    <SecondSection></SecondSection>
    <ThirthSection></ThirthSection>
    <FourthSection></FourthSection>
    <Footer></Footer>
  </div>
</template>

<script>

import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import FirstSection from '../components/FirstSection'
import SecondSection from '../components/SecondSection'
import ThirthSection from '../components/ThirthSection'
import FourthSection from '../components/FourthSection'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components: {
    Navbar,
    Slider,
    FirstSection,
    SecondSection,
    ThirthSection,
    FourthSection,
    Footer
  }
}
</script>
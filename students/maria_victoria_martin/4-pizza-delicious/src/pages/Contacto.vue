<template>
  <div>
    <Showcase :img="img" :intro="intro"></Showcase>
    <ContactSection></ContactSection>
  </div>
</template>

<script>

import Showcase from '@/components/Showcase'
import ContactSection from '@/components/ContactSection'

export default {
  name: 'Home',
  data(){
    return{
      img:"images/bg_1.jpg",
      intro:"Contact"
    }
  },
  components: {
      Showcase,
      ContactSection,
  }
}
</script>
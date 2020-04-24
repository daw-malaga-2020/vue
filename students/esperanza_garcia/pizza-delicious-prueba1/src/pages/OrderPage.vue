<template>
<div>
   <MainSlider :mainTitleSlider="mainTitleSlider" >

   
  </MainSlider>
  <MainMenu/>
  <SectionOrder/>
  
</div>
</template>

<script>

import MainSlider from '../components/MainSlider'
import MainMenu from '../components/MainMenu'
import SectionOrder from '../components/SectionOrder'


export default {
  name:"Order",
  data(){
    return{
      mainTitleSlider:"Our Products",
      
    }
  },
  components: {
    MainSlider,
    MainMenu,
    SectionOrder,
  }
}
</script>
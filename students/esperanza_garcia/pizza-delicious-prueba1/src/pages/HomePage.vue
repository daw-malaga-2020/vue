<template>
<div>
  
  <MainSlider subheadingMainSlider="Welcome" :mainTitleSlider="mainTitleSlider" :descriptionSlider="descriptionSlider">
    
    <a slot="buttonOrderNow" href="#" class="btn btn-primary p-3 px-xl-4 py-xl-3"> Order Now</a>
   
  </MainSlider>
  <InfoRRSS/>
  <SectionPizzas/>
  <OurServices/>
  <SectionBlog/>
  
</div>
</template>

<script>


import MainSlider from '../components/MainSlider'
import InfoRRSS from '../components/InfoRRSS'
import SectionPizzas from '../components/SectionPizzas'
import OurServices from '../components/OurServices'
import SectionBlog from '../components/SectionBlog'


export default {
  name:"Home",
  data(){
    return{
      mainTitleSlider:"we cooked your desired pizza recipe",
      descriptionSlider:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      titleSeparator:"hot pizza meals"
    }
  },
  components: {
    
    MainSlider,
    InfoRRSS,
    SectionPizzas,
    OurServices,
    SectionBlog
  }
}
</script>

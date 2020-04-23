<template>
<div>
   <MainSlider subheadingMainSlider="Welcome" :mainTitleSlider="mainTitleSlider" :descriptionSlider="descriptionSlider">
    
    <a slot="buttonOrderNow" href="#" class="btn btn-primary p-3 px-xl-4 py-xl-3"> Order Now</a>
   
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
      mainTitleSlider:"we cooked your desired pizza recipe",
      descriptionSlider:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
    }
  },
  components: {
    MainSlider,
    MainMenu,
    SectionOrder,
  }
}
</script>
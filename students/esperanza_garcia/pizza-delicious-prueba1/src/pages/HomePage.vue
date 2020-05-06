<template>
<div>
  
  <MainSlider subheadingMainSlider="Welcome" :mainTitleSlider="mainTitleSlider" :descriptionSlider="descriptionSlider" :img="img">
    
    <router-link slot="buttonOrderNow" to="/pedidos" class="btn btn-primary p-3 px-xl-4 py-xl-3"> Order Now</router-link>
   
  </MainSlider>
  <InfoRRSS/>
  <SectionPizzas :products="products"/>
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
      img:"/images/bg_3.jpg",
      mainTitleSlider:"we cooked your desired pizza recipe",
      descriptionSlider:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      titleSeparator:"hot pizza meals"
    }
  },
  computed:{
    products(){
      return this.$store.state.products
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

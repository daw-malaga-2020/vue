<template>
  <div>
     <MainSlider subheadingMainSlider="404" :mainTitleSlider="mainTitleSlider" :descriptionSlider="descriptionSlider" :img="img"></MainSlider>
  </div>
</template>
<script>

import MainSlider from '../components/MainSlider'

export default {
  name:"NotFoundPage",
  data(){
    return{
    mainTitleSlider:"Lo siento página no encontrada",
    descriptionSlider: "Error",
    img: "/images/bg_1.jpg",
    }
  },
  components:{
    MainSlider
  }
}
</script>
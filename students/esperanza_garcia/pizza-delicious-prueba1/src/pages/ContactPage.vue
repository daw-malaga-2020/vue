<template>
<div>
  <MainSlider :mainTitleSlider="mainTitleSlider" :descriptionSlider="descriptionSlider" :img="img">
  </MainSlider>
  <SectionContact/>
</div>
</template>

<script>


import MainSlider from '../components/MainSlider'
import SectionContact from '../components/SectionContact'


export default {
  name:"Contact",
  data(){
    return{
      img:"/images/bg_2.jpg",
      mainTitleSlider: "contact us",
      descriptionSlider: "give us some delicious feedback"
    }
  },
  components: {
    MainSlider,
    SectionContact
  }
}
</script>
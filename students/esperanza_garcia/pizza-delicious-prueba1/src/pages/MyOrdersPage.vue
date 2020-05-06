<template>
  <MainSlider subheadingMainSlider="Hello!" :mainTitleSlider="mainTitleSlider" :descriptionSlider="descriptionSlider" :img="img"></MainSlider>  

</template>
<script>
import MainSlider from '@/components/MainSlider'

export default {
  name: "MyOrders",
  data(){
    return{
      mainTitleSlider: "Mis pedidos",
      descriptionSlider: "Revisa aquí tus pedidos",
      img:"/images/bg_2.png"
    }
  },
  components:{
    MainSlider
  }
}
</script>
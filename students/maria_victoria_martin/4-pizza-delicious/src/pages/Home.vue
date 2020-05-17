<template>
  <div>
    <Showcase :img="img" :intro="intro" :title="title" :desc="desc" 
    ><a slot="btnOrder" href="#" class="btn btn-primary p-3 px-xl-4 py-xl-3"> Order Now</a></Showcase>
    <MainIntro></MainIntro>
    <PizzaSection></PizzaSection>
    <PizzaServices></PizzaServices>
    <BlogSection></BlogSection>
  </div>
</template>

<script>

import Showcase from '@/components/Showcase'
import MainIntro from '@/components/MainIntro'
import PizzaSection from '@/components/PizzaSection'
import PizzaServices from '@/components/PizzaServices'
import BlogSection from '@/components/BlogSection'

export default {
 
  name: 'Home',
  data(){
    return{
        img:"images/bg_3.jpg",
        intro:"Welcome",
        title:"we cooked your desired pizza recipe",
        desc:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    }
  },
  components: {
      Showcase,
      MainIntro,
      PizzaSection,
      PizzaServices,
      BlogSection,
  },
}
</script>
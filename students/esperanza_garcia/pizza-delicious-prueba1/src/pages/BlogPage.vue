<template>
<div>
  
  <MainSlider mainTitleSlider="blog" :descriptionSlider="descriptionSlider"></MainSlider>
  <MainBlog></MainBlog>
</div>
</template>

<script>


import MainSlider from '../components/MainSlider'
import MainBlog from '../components/MainBlog'


export default {
  name:"Blog",
  data(){
    return{
      descriptionSlider: "Read our delicious histories"
    }
  },
  components: {
    MainSlider,
    MainBlog
  }
}
</script>


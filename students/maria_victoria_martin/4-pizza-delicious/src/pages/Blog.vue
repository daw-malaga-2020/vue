<template>
  <div>
    <Showcase :img="img" :intro="intro"></Showcase>
    <BlogSection></BlogSection>
  </div>
</template>

<script>

import Showcase from '@/components/Showcase'
import BlogSection from '@/components/BlogSection'

export default {
  name: 'Blog',
  data(){
    return{
      img:"images/bg_2.jpg",
      intro:"Blog detail"
    }
  },
  components: {
      Showcase,
      BlogSection,
  }
}
</script>
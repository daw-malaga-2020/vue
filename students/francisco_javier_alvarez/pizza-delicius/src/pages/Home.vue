<template>
    <div>
        <MainSlider></MainSlider>
        <MainContact></MainContact>
        <MainContent></MainContent>
        <MainServices></MainServices>
        <MainBlog></MainBlog>
    </div>
</template>

<script>


import MainSlider from '../components/MainSlider'
import MainContact from '../components/MainContact'
import MainContent from '../components/MainContent'
import MainServices from '../components/MainServices'
import MainBlog from '../components/MainBlog'

export default {
    name: 'Home',
    components: {
       MainSlider,
       MainContact,
       MainContent,
       MainServices,
       MainBlog
    }
}
</script>
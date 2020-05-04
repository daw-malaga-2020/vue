<template>
    <div>
        <Slider HeadingWelcome="Welcome" :titleSlider=titleSlider.toUpperCase() :descriptionSlider="descriptionSlider">
            <a slot="btnOrder" href="#" class="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a>
        </Slider>
        <MainContact></MainContact>
        <MainContent></MainContent>
        <MainServices></MainServices>
        <MainBlog></MainBlog>
    </div>
</template>

<script>

import Slider from '../components/Slider'
import MainContact from '../components/MainContact'
import MainContent from '../components/MainContent'
import MainServices from '../components/MainServices'
import MainBlog from '../components/MainBlog'

export default {
    data(){
        return{
            titleSlider: 'We cooked your desired pizza recipe',
            descriptionSlider: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        }
    },
    name: 'Home',
    components: {
        Slider,
        MainContact,
        MainContent,
        MainServices,
        MainBlog
    }
}
</script>
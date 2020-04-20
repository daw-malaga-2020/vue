<template>
    <div>
        <MainNav></MainNav>
        <MainSlider></MainSlider>
        <MainContact></MainContact>
        <MainContent></MainContent>
        <MainServices></MainServices>
        <MainBlog></MainBlog>
        <MainFooter></MainFooter>
    </div>
</template>

<script>

import MainNav from '../components/MainNav'
import MainSlider from '../components/MainSlider'
import MainContact from '../components/MainContact'
import MainContent from '../components/MainContent'
import MainServices from '../components/MainServices'
import MainBlog from '../components/MainBlog'
import MainFooter from '../components/MainFooter'

export default {
    name: 'Home',
    components: {
       MainNav,
       MainSlider,
       MainContact,
       MainContent,
       MainServices,
       MainBlog,
       MainFooter
    }
}
</script>
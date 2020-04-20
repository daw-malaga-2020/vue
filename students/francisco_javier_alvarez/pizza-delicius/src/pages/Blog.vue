<template>
    <div>
        <MainNav></MainNav>
        <SliderBlog></SliderBlog>
        <EntradasBlog></EntradasBlog>
        <MainFooter></MainFooter>
    </div>
</template>

<script>

import MainNav from '../components/MainNav'
import SliderBlog from '../components/SliderBlog'
import EntradasBlog from '../components/EntradasBlog'
import MainFooter from '../components/MainFooter'

export default {
    name: 'Blog',
    components: {
        MainNav,
        SliderBlog,
        EntradasBlog,
        MainFooter
    }
}
</script>
<template>
    <div>
        <SliderBlog></SliderBlog>
        <EntradasBlog></EntradasBlog>
    </div>
</template>

<script>

import SliderBlog from '../components/SliderBlog'
import EntradasBlog from '../components/EntradasBlog'

export default {
    name: 'Blog',
    components: {
        SliderBlog,
        EntradasBlog,
    }
}
</script>
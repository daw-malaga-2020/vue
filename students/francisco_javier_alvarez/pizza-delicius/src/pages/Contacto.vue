<template>
    <div>
        <MainNav></MainNav>
        <SliderContact></SliderContact>
        <FormContact></FormContact>
        <MainFooter></MainFooter>
    </div>
</template>

<script>

import MainNav from '../components/MainNav'
import SliderContact from '../components/SliderContact'
import FormContact from '../components/FormContact'
import MainFooter from '../components/MainFooter'

export default {
    name: 'Contacto',
    components: {
        MainNav,
        SliderContact,
        FormContact,
        MainFooter
    }
}
</script>
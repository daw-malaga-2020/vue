<template>
  <div>
    <Navbar></Navbar>
    <Slider></Slider>
  </div>
</template>

<script>

import Navbar from '../components/Navbar'
import Slider from '../components/Slider'


export default {
  name: 'Pedidos',
  components: {
    Navbar,
    Slider,
  }
}
</script>
<template>
    <div>
        <MainNav></MainNav>
        <SliderPedido></SliderPedido>
        <MenuPedidos></MenuPedidos>
        <Carrito></Carrito>
        <MainFooter></MainFooter>
    </div>
</template>

<script>

import MainNav from '../components/MainNav'
import SliderPedido from '../components/SliderPedido'
import MenuPedidos from '../components/MenuPedidos'
import Carrito from '../components/Carrito'
import MainFooter from '../components/MainFooter'

export default {
    name: 'Pedidos',
    components: {
        MainNav,
        SliderPedido,
        MenuPedidos,
        Carrito,
        MainFooter
    }
}
</script>
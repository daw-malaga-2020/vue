<template>
    <div>
        <SliderPedido></SliderPedido>
        <MenuPedidos></MenuPedidos>
        <Carrito></Carrito>
    </div>
</template>

<script>

import SliderPedido from '../components/SliderPedido'
import MenuPedidos from '../components/MenuPedidos'
import Carrito from '../components/Carrito'

export default {
    name: 'Pedidos',
    components: {
        SliderPedido,
        MenuPedidos,
        Carrito,
    }
}
</script>
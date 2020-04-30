<template>
    <div>
        <MenuPedidos></MenuPedidos>
        <Carrito></Carrito>
    </div>
</template>

<script>

import MenuPedidos from '../components/MenuPedidos'
import Carrito from '../components/Carrito'

export default {
    name: 'Pedidos',
    components: {
        MenuPedidos,
        Carrito,
    }
}
</script>
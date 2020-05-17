<template>
<body>

<ProductItem    
    @add="addToCart"           
></ProductItem>

</body>

</template>

<script>
import ProductItem from '@/components/ProductItem'

export default {
  name: 'ProductPage',
  methods:{ 
    addToCart(item){
     this.$store.commit('addToCart', item)
    }
  },
  components:{
    ProductItem
  }

}
</script>
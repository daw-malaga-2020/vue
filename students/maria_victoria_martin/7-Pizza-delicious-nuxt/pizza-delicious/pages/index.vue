<template>

	<div>
		<MainSlider
        subheading="Welcome"
        heading="WE COOKED YOUR DESIRED PIZZA RECIPE"
        desc="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        image="/images/bg_3.jpg"
    />
		<MainSeparator />
		<FeaturePizza :products="products" :count="3" category="pizza" :title="title" :desc="desc" />
		<OurServices />
		<FeatureBlog />
	</div>

</template>

<script>
import MainSlider from "@/components/MainSlider";
import MainSeparator from "@/components/MainSeparator";
import FeaturePizza from "@/components/FeaturePizza";
import OurServices from "@/components/OurServices";
import FeatureBlog from "@/components/FeatureBlog";

export default {
  data() {
    return {
      title: "Mi titulo",
      desc: "Mi descripción",
    }
  },
  computed:{
    products(){
      return this.$fireStore.collection('products')
    }
  },
  components: {
    MainSlider,
    MainSeparator,
    FeaturePizza,
    OurServices,
    FeatureBlog
  }
};
</script>

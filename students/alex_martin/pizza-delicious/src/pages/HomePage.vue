<template>

	<div>
		<MainSlider />
		<MainSeparator />
		<FeaturePizza :products="products" :count="3" category="pasta" :title="title" :desc="desc" />
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
      return this.$store.state.products
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
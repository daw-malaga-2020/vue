<template>

	<div>
		
		<MainSlider />
		<MainSeparator />
		<FeaturePizza />
		<OurServices />
		<FeatureBlog />


		
	</div>

</template>

<script>
import MainSlider from '@/components/MainSlider'
import MainSeparator from '@/components/MainSeparator'
import FeaturePizza from "@/components/FeaturePizza"
import OurServices from "@/components/OurServices"
import FeatureBlog from "@/components/FeatureBlog"
export default {
	components: {
		MainSlider, 
		MainSeparator,
		FeaturePizza,
		OurServices,
		FeatureBlog,
	}
}
</script>

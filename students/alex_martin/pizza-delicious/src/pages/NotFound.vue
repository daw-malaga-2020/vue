<template>
	<div>
    	<MainSlider 
        subheading="Page not found" 
        heading="404"
        image="/images/bg_1.jpg"
        size="small"
    />
	</div>
</template>


<script>

import MainSlider from "@/components/MainSlider";

export default {
  name: "NotFound",
  components: {
    MainSlider,
  },
};
</script>

<style></style>

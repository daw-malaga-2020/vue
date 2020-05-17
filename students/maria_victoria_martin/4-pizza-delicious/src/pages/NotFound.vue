<template>
	<div>
    	<Showcase
        intro="Page not found" 
        title="404"
        img="/images/bg_1.jpg"
        size="small"
    />
	</div>
</template>


<script>

import Showcase from "@/components/Showcase";

export default {
  name: "NotFound",
  components: {
    Showcase,
  },
};
</script>

<style></style>

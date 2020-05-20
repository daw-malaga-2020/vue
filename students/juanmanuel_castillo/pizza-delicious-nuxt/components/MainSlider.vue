<template>
<section class="home-slider owl-carousel img" :class="size">
		<div class="slider-item" :style='"background-image: url("+ image +");"'>
		  <div class="overlay"></div>
		  <div class="container">
			<div
			  class="row slider-text justify-content-center align-items-center"
			  data-scrollax-parent="true"
			>
			  <div class="col-md-7 col-sm-12 text-center ">
				<span class="subheading">{{subheading}}</span>
				<h1 class="mb-4">{{heading}}</h1>
				<p class="mb-4 mb-md-5">
				  {{desc}}
				</p>
			  </div>
			</div>
		  </div>
		</div>
	  </section>
</template>
<script>
export default {
	props: ["subheading","heading","desc", "image", "size" ]
}
</script>
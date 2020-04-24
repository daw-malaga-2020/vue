<template>
  <section class="home-slider owl-carousel img">
		<div class="slider-item" style="background-image: url(images/bg_3.jpg);">
		  <div class="overlay"></div>
		  <div class="container">
			<div
			  class="row slider-text justify-content-center align-items-center"
			  data-scrollax-parent="true"
			>
			  <div class="col-md-7 col-sm-12 text-center ">
				<span class="subheading">{{subheadingMainSlider}}</span>
				<h1 class="mb-4" >{{mainTitleSlider}}</h1>
				<p class="mb-4 mb-md-5"> {{descriptionSlider}}
				</p>
				<p>
				  <slot name="buttonOrderNow"></slot>
				</p>
			  </div>
			</div>
		  </div>
		</div>
	  </section>
</template>
<script>
export default {
	props:[ "subheadingMainSlider", "mainTitleSlider", "descriptionSlider"
	]
}
</script>
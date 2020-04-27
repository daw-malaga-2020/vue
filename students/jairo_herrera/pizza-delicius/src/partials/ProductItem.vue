<template>
 <div class="col-md-3 text-center">
	<div class="menu-wrap">
	<a
		href="#"
		class="menu-img img mb-4"
		style="background-image: url(images/pizza-1.jpg);"
	></a>
	<div class="text">
		<h3><a href="#">{{title}}</a></h3>
		<p>
		Far far away, behind the word mountains, far from
		the countries Vokalia and Consonantia.
		</p>
		<p class="price"><span>$2.90</span></p>
		<p>
		<a href="#" class="btn btn-white btn-outline-white"
			>Add to cart</a
		>
		</p>
	</div>
	</div>
</div>
</template>
<script>
export default {
	props: ["title"]
}
</script>
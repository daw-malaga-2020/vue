<template>
 <div class="col-md-3 text-center">
	<div class="menu-wrap">
	<a
		href="#"
		class="menu-img img mb-4"
		:style='"background-image: url("+ img +");"'
	></a>
	<div class="text">
		<h3><a href="#">{{title}}</a></h3>
		<p>
		{{desc}}
		</p>
		<p class="price"><span>{{price | toMoney}}</span></p>
		<p>
		<a @click.prevent="addToCart" href="#" class="btn btn-white btn-outline-white"
			>Add to cart</a
		>
		</p>
	</div>
	</div>
</div>
</template>
<script>
export default {
	props: ["title", "desc", "price", "img"],
	methods: {
		addToCart(){
			this.$emit("click")
		}
	},
}
</script>
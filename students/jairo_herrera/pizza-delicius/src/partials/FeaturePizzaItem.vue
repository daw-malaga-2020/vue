<template>
	<div class="col-lg-4 d-flex ">
		<div class="services-wrap d-flex">
		<a
			href="#"
			class="img"
			:style='"background-image: url("+ img +");"'
		></a>
		<div class="text p-4">
			<h3>{{title}}</h3>
			<p>
			{{ desc }}
			</p>
			<p class="price">
			<span>{{price}}</span>
			<a href="#" class="ml-2 btn btn-white btn-outline-white"
				>Order</a
			>
			</p>
		</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["title", "img", "desc", "price"]
}
</script>
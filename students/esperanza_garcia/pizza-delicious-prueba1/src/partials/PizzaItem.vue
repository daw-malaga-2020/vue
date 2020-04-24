<template>
  <div class="col-lg-4 d-flex ">
			  <div class="services-wrap d-flex">
				<a
				  href="#"
				  class="img"
				  :style='"background-image: url("+ img +");"'
				></a>
				<div class="text p-4">
				  <h3>{{name}}</h3>
				  <p>
					{{description}}
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
	props:["name","img","description","price"	]
}
</script>
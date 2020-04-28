<template>
	  <section class="ftco-section">
		<div class="container">
		  <div class="row justify-content-center mb-5 pb-3">
			<div class="col-md-7 heading-section  text-center">
			  <h2 class="mb-4">{{title}}</h2>
			  <p>
				{{desc}}
			  </p>
			</div>
		  </div>
		</div>
		<div class="container-wrap">
		  <div class="row no-gutters d-flex">
	
			<FeaturePizzaItem v-for="item in productsFiltered" :key="item.id" 
				:title="item.title"
				:img="item.img"
				:desc="item.desc"
				:price="item.price"
			/>

		  </div>
		</div>
	
	  </section>
</template>

<script>

import FeaturePizzaItem from '@/partials/FeaturePizzaItem'

export default {
	props:["products", "count", "category", "title", "desc"],
	computed:{
		productsFiltered(){
			let products= this.products.filter((item)=>item.category === this.category)
			products= products.slice(0, this.count)
			return products
		}
	},
	components: {
		FeaturePizzaItem
	}
}
</script>
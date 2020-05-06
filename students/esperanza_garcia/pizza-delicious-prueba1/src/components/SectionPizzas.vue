<template>
	  <section class="ftco-section">
			<div class="container">
				<div class="row justify-content-center mb-5 pb-3">
						<div class="col-md-7 heading-section text-center">
							<h2 class="mb-4">Hot Pizza Meals</h2>
							<p>
							Far far away, behind the word mountains, far from the countries
							Vokalia and Consonantia, there live the blind texts.
							</p>
						</div>
				</div>
				
			</div>
			<div class="container-wrap">
				<div class="row no-gutters d-flex">
		
					<PizzaItem v-for=" item in products" :key="item.id" :name="item.title" :img="item.image" :description="item.desc" :price="item.price" @add="addToCart(item)"></PizzaItem>

				</div>
			</div>
		
			<div class="container">
					<div class="row justify-content-center mb-5 pb-3 mt-5 pt-5">
						<div class="col-md-7 heading-section text-center ">
							<h2 class="mb-4">Our Menu Pricing</h2>
							<p class="flip">
							<span class="deg1"></span><span class="deg2"></span
							><span class="deg3"></span>
							</p>
							<p class="mt-5">
							Far far away, behind the word mountains, far from the countries
							Vokalia and Consonantia, there live the blind texts.
							</p>
						</div>
					</div>
				<div class="row">
					<div class="col-md-6">
						<PizzasOfMenu v-for="item in products" :key="item.id" :name="item.title" :img="item.image" :description="item.desc" :price="item.price"></PizzasOfMenu>

					
					</div>
				</div>
			</div>
	  </section>
</template>

<script>

import PizzaItem from '../partials/PizzaItem'
import PizzasOfMenu	from '../partials/PizzasOfMenu'

export default {
	name: "SectionPizzas",
	props:["products"],
	data(){
		return{
			
		}
	},	
	methods:{
		addToCart(item){
			this.$store.commit("addToCart", item)
		}
	},
	components: {
		PizzaItem,
		PizzasOfMenu
	}
}
</script>
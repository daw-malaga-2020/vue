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
		
					<PizzaItem v-for=" item in typesOfPizzas" :key="item.id" :name="item.name" :img="item.img" :description="item.description" :price="item.price"></PizzaItem>

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
						<PizzasOfMenu v-for="item in menuOfPizzas" :key="item.id" :name="item.name" :img="item.img" :description="item.description" :price="item.price"></PizzasOfMenu>

					
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
	data(){
		return{
			typesOfPizzas: [
				{id:1 ,name: "Pizza italiana", img: "images/pizza-8.jpg", description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price:10},
				{id:1 ,name: "Pizza italiana", img: "images/pizza-8.jpg", description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price:10},
				{id:1 ,name: "Pizza italiana", img: "images/pizza-8.jpg", description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price:10},
				{id:1 ,name: "Pizza italiana", img: "images/pizza-8.jpg", description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price:10},
				{id:1 ,name: "Pizza italiana", img: "images/pizza-8.jpg", description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price:10},
				{id:1 ,name: "Pizza italiana", img: "images/pizza-8.jpg", description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price:10}
				

			],
			menuOfPizzas:[
				{id:1 ,name: "Pizza italiana", img: "images/pizza-8.jpg", description:"A small river named Duden flows by their place and supplies", price:10},
				{id:1 ,name: "Pizza italiana", img: "images/pizza-8.jpg", description:"A small river named Duden flows by their place and supplies", price:10},
				{id:1 ,name: "Pizza italiana", img: "images/pizza-8.jpg", description:"A small river named Duden flows by their place and supplies", price:10},
				{id:1 ,name: "Pizza italiana", img: "images/pizza-8.jpg", description:"A small river named Duden flows by their place and supplies", price:10},
				{id:1 ,name: "Pizza italiana", img: "images/pizza-8.jpg", description:"A small river named Duden flows by their place and supplies", price:10},
				{id:1 ,name: "Pizza italiana", img: "images/pizza-8.jpg", description:"A small river named Duden flows by their place and supplies", price:10},
				{id:1 ,name: "Pizza italiana", img: "images/pizza-8.jpg", description:"A small river named Duden flows by their place and supplies", price:10},
				{id:1 ,name: "Pizza italiana", img: "images/pizza-8.jpg", description:"A small river named Duden flows by their place and supplies", price:10}
			]
		}
	},	
	components: {
		PizzaItem,
		PizzasOfMenu
	}
}
</script>
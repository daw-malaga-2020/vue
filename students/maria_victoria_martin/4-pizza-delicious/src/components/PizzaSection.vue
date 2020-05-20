<template>
  <div>
    <section class="ftco-section">
		<div class="container">
		  <div class="row justify-content-center mb-5 pb-3">
			<div class="col-md-7 heading-section  text-center">
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

			<PizzaItem v-for="item in products" :key="item.id"
				:title="item.title"
				:img="item.image"
				:desc="item.desc"
				:price="item.price"
				@add="addToCart(item)"
			></PizzaItem>
			
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

			  <PizzaMenu v-for="item in products" :key="item.id"
				:title="item.title"
				:img="item.image"
				:desc="item.desc"
				:price="item.price"
			></PizzaMenu>

			</div>
		  </div>
		</div>
	<!-- 	<div class="pricing-entry d-flex ">
				<div
				  class="img"
				  style="background-image: url(images/pizza-2.jpg);"
				></div>
				<div class="desc pl-3">
				  <div class="d-flex text align-items-center">
					<h3><span>Hawaiian Pizza</span></h3>
					<span class="price">$29.00</span>
				  </div>
				  <div class="d-block">
					<p>
					  A small river named Duden flows by their place and supplies
					</p>
				  </div>
				</div>
			  </div>
			  <div class="pricing-entry d-flex ">
				<div
				  class="img"
				  style="background-image: url(images/pizza-3.jpg);"
				></div>
				<div class="desc pl-3">
				  <div class="d-flex text align-items-center">
					<h3><span>Greek Pizza</span></h3>
					<span class="price">$20.00</span>
				  </div>
				  <div class="d-block">
					<p>
					  A small river named Duden flows by their place and supplies
					</p>
				  </div>
				</div>
			  </div>
			  <div class="pricing-entry d-flex ">
				<div
				  class="img"
				  style="background-image: url(images/pizza-4.jpg);"
				></div>
				<div class="desc pl-3">
				  <div class="d-flex text align-items-center">
					<h3><span>Bacon Crispy Thins</span></h3>
					<span class="price">$20.00</span>
				  </div>
				  <div class="d-block">
					<p>
					  A small river named Duden flows by their place and supplies
					</p>
				  </div>
				</div>
			  </div>
			</div>
	
			<div class="col-md-6">
			  <div class="pricing-entry d-flex ">
				<div
				  class="img"
				  style="background-image: url(images/pizza-5.jpg);"
				></div>
				<div class="desc pl-3">
				  <div class="d-flex text align-items-center">
					<h3><span>Hawaiian Special</span></h3>
					<span class="price">$49.91</span>
				  </div>
				  <div class="d-block">
					<p>
					  A small river named Duden flows by their place and supplies
					</p>
				  </div>
				</div>
			  </div>
			  <div class="pricing-entry d-flex ">
				<div
				  class="img"
				  style="background-image: url(images/pizza-6.jpg);"
				></div>
				<div class="desc pl-3">
				  <div class="d-flex text align-items-center">
					<h3><span>Ultimate Overload</span></h3>
					<span class="price">$20.00</span>
				  </div>
				  <div class="d-block">
					<p>
					  A small river named Duden flows by their place and supplies
					</p>
				  </div>
				</div>
			  </div>
			  <div class="pricing-entry d-flex ">
				<div
				  class="img"
				  style="background-image: url(images/pizza-7.jpg);"
				></div>
				<div class="desc pl-3">
				  <div class="d-flex text align-items-center">
					<h3><span>Bacon Pizza</span></h3>
					<span class="price">$20.00</span>
				  </div>
				  <div class="d-block">
					<p>
					  A small river named Duden flows by their place and supplies
					</p>
				  </div>
				</div>
			  </div>
			  <div class="pricing-entry d-flex ">
				<div
				  class="img"
				  style="background-image: url(images/pizza-8.jpg);"
				></div>
				<div class="desc pl-3">
				  <div class="d-flex text align-items-center">
					<h3><span>Ham &amp; Pineapple</span></h3>
					<span class="price">$20.00</span>
				  </div>
				  <div class="d-block">
					<p>
					  A small river named Duden flows by their place and supplies
					</p>
				  </div>
				</div>
			  </div>
			</div> 
		  </div>
		</div> -->
	  </section>
  </div>
</template>

<script>
import PizzaItem from '@/partials/PizzaItem'
import PizzaMenu from '@/partials/PizzaMenu'

export default {
	methods:{
		addToCart(item){
			this.$store.commit('addToCart', item)
		}
	},
	
	   computed:{
    products(){
			return this.$store.state.products
		}
     },
	components:{
				PizzaItem,
				PizzaMenu
	}
}
</script>
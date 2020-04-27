<template>
	<nav
	class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
	id="ftco-navbar"
  >
	<div class="container">
	  <a class="navbar-brand" href="index.html"
		><span class="flaticon-pizza-1 mr-1"></span>Pizza<br /><small
		  >Delicious</small
		></a
	  >
	  <button
		class="navbar-toggler"
		type="button"
		data-toggle="collapse"
		data-target="#ftco-nav"
		aria-controls="ftco-nav"
		aria-expanded="false"
		aria-label="Toggle navigation"
	  >
		<span class="oi oi-menu"></span> Pedidos
	  </button>
	  <div class="collapse navbar-collapse" id="ftco-nav">
		<ul class="navbar-nav ml-auto">
			<li>
				<router-link :to="'/HomePage'">Home</router-link>
				<router-link :to="'/OrderPage'">Pedidos</router-link>
				<router-link :to="'/BlogPage'">Blog</router-link>
				<router-link :to="'/ConctactPage'">Contacto</router-link>
	</li>
		</ul>
	  </div>
	</div>
  	</nav>  
</template>

<script>
</script>
<template>
  <nav
	class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
	id="ftco-navbar"
  >
	<div class="container">
	  <router-link class="navbar-brand" to="index.html"
		><span class="flaticon-pizza-1 mr-1"></span>Pizza<br /><small
		  >Delicious</small
		></router-link
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
		<span class="oi oi-menu"></span> Menu
	  </button>
	  <div class="collapse navbar-collapse" id="ftco-nav">
		<ul class="navbar-nav ml-auto">
		  <li class="nav-item" v-for="item in menu" :key="item.id">
			<router-link :to="item.to" class="nav-link">{{item.name}}
				<span v-if="item.id ===2 && listOrderCount !== 0"  class="badge badge-warning badge-pill">{{listOrderCount}} </span>
			</router-link>
			 </li>
		</ul>
	  </div>
	</div>
  	</nav>
</template>

<script>
export default {
	props: ["menu"],
	computed:{
		listOrderCount(){
			return this.$store.getters.listOrderCount
		}
	}
}
</script>
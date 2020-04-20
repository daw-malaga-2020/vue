<template>
	<div>
		<button @click="waitAndGo">Espera 2 segundos y ve a Home</button>
	</div>
</template>

<script>
export default {
	methods: {
		waitAndGo(){
			setTimeout( ()=>{
				this.$router.push("/")
			}, 2000)
		}
	}
}
</script>
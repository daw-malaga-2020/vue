<template>
  <div class="col-md-7 heading-section  text-center">
			  <h2 class="mb-4" v-bind:text="headingSection">{{text}}</h2>
			  <p>
				Far far away, behind the word mountains, far from the countries
				Vokalia and Consonantia, there live the blind texts.
			  </p>
			</div>
</template>
<script>
export default {
	props: {
		text:{
			default: "hot pizza meals"
		}
	}
}
</script>
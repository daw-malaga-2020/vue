<template>
	<div>
		Esta es mi página de usuario <br>
		El usuario seleccionado es: {{id}}
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	props: ["id"]
}
</script>
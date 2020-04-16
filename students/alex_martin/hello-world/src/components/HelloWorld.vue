<template>
	<div>
		{{msg}}
	</div>
</template>
<script>
export default {
	name: "HelloWorld",
	props: ["msg"],
	data(){
		return {
			test: "Hola"
		}
	}
}
</script>
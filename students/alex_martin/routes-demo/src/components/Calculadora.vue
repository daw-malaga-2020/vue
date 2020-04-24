<template>
	<div>
		{{titulo}}: {{valor1}} {{operador}} {{valor2}} = {{operacion}}
	</div>
</template>

<script>
export default {
	props: ["valor1", "valor2", "tipo", "titulo"],
	computed: {
		operador() {
			if (this.tipo === "suma"){
				return "+"
			}
			if (this.tipo === "multiplica"){
				return "*"
			}
			if (this.tipo === "resta"){
				return "-"
			}
		},
		operacion(){

			if (this.tipo === "suma"){
				return this.valor1 + this.valor2
			}
			if (this.tipo === "multiplica"){
				return this.valor1 * this.valor2
			}
			if (this.tipo === "resta"){
				return this.valor1 - this.valor2
			}

			return "No puedo calcularlo"
		}
	},
}
</script>
<template>
	<div>
		Página 1
		<label for="">
			Valor seleccionado 1
		<input type="number" v-model.number="valorSeleccionado1">
		</label>
		<label for="">
		Valor seleccionado 2
		<input type="number" v-model.number="valorSeleccionado2">
		</label>
		<Calculadora :valor1="valorSeleccionado1" :valor2="valorSeleccionado2" tipo="suma" titulo="Suma" />
		<Calculadora :valor1=5 :valor2=9 tipo="multiplica" titulo="Multiplica" />
		<Calculadora :valor1=1 :valor2=8 tipo="resta" :titulo="titulo" />
	</div>
</template>

<script>
import Calculadora from '@/components/Calculadora'
export default {
	data(){
		return{
			titulo: "Mi titulo dinamico",
			valorSeleccionado1: 0,
			valorSeleccionado2: 0,
		}
	},
	components:{
		Calculadora
	}
}
</script>
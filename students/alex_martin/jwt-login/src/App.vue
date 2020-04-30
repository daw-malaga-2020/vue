<template>
  <div id="app">
      <strong>TOKEN: </strong>
      <span v-if="token">{{token}} </span>
      <button v-else @click="getToken">Obtener un token</button>
      <div>
        <button @click="callPrivate">Llamar a un método privado</button>
      </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      token: ""
    }
  },
  methods: {
    async callPrivate(){
      try{
        let config = {
          headers: {
            'Authorization': `Bearer ${this.token}`
          }
        }
        let response = await this.axios.get("orders", config);
        if (response.status===200) alert("Petición realizada correctamente a un método privado")
      }catch(e){
          if(e.response.status === 403){
            alert(e.response.data.message)
          }
      }
    },
    async getToken() {
      let loginData ={email: "alex@test.es",password:"test"}
      let response = await this.axios.post("auth/login", loginData);
      this.token = response.data.token
    },
  }
}
</script>
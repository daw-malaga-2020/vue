<template>
  <div id="app">
    <pre>
      {{myData}}
    </pre>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      myData: ""
    }
  },
  async mounted() {
    let loginData ={email: "alex@test.es",password:"test"}
    let response = await this.axios.post("auth/login", loginData);
    this.myData = response.data
  },
}
</script>
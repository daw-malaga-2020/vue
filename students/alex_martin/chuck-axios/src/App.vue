<template>
  <div id="app">
      <div>
        <img :src="img" alt="">
        <p>
          {{joke}}
        </p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      img: "",
      joke: ""
    }
  },
  components: {
  },
  async mounted() {
    let response = await this.$http("jokes/random")
    this.joke = response.data.value
    this.img = response.data.icon_url
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

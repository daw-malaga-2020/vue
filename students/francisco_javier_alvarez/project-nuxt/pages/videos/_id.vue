<template>
  <div class="container">
    <div>
      <nuxt-link to="/"><logo /></nuxt-link>
      <h1 class="title">
        Proyecto con Nuxt
      </h1>
      <h2 class="subtitle">
        Mi primer proyecto con Nuxt
      </h2>
      <youtube :video-id="videoId"></youtube>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Vue from 'vue'


export default {
asyncData({params}){
      return {
          videoId: params.id
      }
  },
  components: {
    Logo
  },
   mounted() {
    Vue.notify({
      group: 'alert',
      title: 'Notificación',
      text: 'Puedes salir pulsando en el logo.'
    })
  }
}
</script>


<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

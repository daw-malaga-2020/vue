<template>
  <div class="container">
    <div>
      <nuxt-link to="/"><logo /></nuxt-link>
      <h1 class="title">
        Proyecto con Nuxt
      </h1>
      <h2 class="subtitle">
        MI primer proyecto con Nuxt
      </h2>
      <div class="links">
        <nuxt-link to="/products"
          class="button--green"
        >
          Productos
        </nuxt-link>
        <nuxt-link to="/videos"
          class="button--green"
        >
          Videos
        </nuxt-link>
        <nuxt-link to="/contact"
          class="button--green"
        >
          Contact
        </nuxt-link >
        <nuxt-link to="/about"
          class="button--green"
        >
          About
        </nuxt-link >
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Vue from 'vue'

export default {
  components: {
    Logo
  },
  mounted() {
    Vue.notify({
      group: 'alert',
      title: 'Bienvenido/a',
      text: 'Te doy la bienvenida a mi sitio web, puedes usar el logo para volver a esta ṕagina.'
    })
  }
}
</script>

<style>
.container {
  position: relative;
  z-index: 1;
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

.vue-notification {
  position: absolute;
  z-index: 10;
  padding: 15px;
  margin: 0 5px 5px;
  font-size: 12px;
  color: #ffffff;
  background: #44A4FC;
  border-left: 5px solid #187FE7;
}

.warn {
  background: #ffb648;
  border-left-color: #f48a06;
}

.error {
  background: #E54D42;
  border-left-color: #B82E24;
}
.error {
  background: #E54D42;
  border-left-color: #B82E24;
}
</style>

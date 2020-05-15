<template>
  <div>
  <notifications group="alert"/>
    <nuxt />
      <client-only>
        <cookie-law theme="base" :buttonText="btnAgree">
          <div slot="message">
               Este sitio web usa cookies, si permanece aquí acepta su uso. 
               Puede leer más sobre el uso de cookies en nuestra
                <router-link to="legal-notes">
                política de privacidad.
                </router-link>
          </div>
        </cookie-law>
      </client-only>
  </div>
</template>

<script>
  import CookieLaw from 'vue-cookie-law'
  import Vue from 'vue'
  import Notifications from 'vue-notification/dist/ssr.js'

  Vue.use(Notifications)

  export default {
    data(){
      return {
          btnAgree: 'Aceptar'
      }
    },
    components: { CookieLaw }
  }
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

<template>
  <div>
    <notifications group="foo" />
    <nuxt />
    <client-only>
      <cookie-law>
        <div slot-scope="props">
          <p>Utilizamos cookies propias y de terceros para mejorar la experiencia del usuario a través de su navegación. Si continúas navegando aceptas su uso.</p>
          <button class="skew accept-btn" @click="props.accept">
            <span>Aceptar</span>
          </button>
          <a
            class="skew read-more-btn"
            href="https://example.com/politica-de-cookies/"
            target="_blank"
          >
            <span>Leer más</span>
          </a>
        </div>
      </cookie-law>
    </client-only>
  </div>
</template>

<script>
import CookieLaw from "vue-cookie-law";

export default {
  components: { CookieLaw }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
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

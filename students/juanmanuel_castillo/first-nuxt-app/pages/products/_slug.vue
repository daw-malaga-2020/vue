<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">PÁGINA DE PRODUCTO</h1>
      <h2 class="subtitle">{{ productId }}</h2>
      <h2 class="subtitle">{{ productStr }}</h2>
      <youtube :video-id="videoId"></youtube>
      <div class="links">
        <nuxt-link to="/products" class="button--green">Listado de productos</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  validate({params}){
    console.info(parseInt(params.slug))
    return true
  },
  asyncData({ params }) {
    console.info(params);
    return {
      videoId: 'a_IA-8nQ4FY',
      productId: params.slug
    };
  },
  computed: {
    productStr() {
      return this.productId + " <------";
    }
  },
  mounted() {
    setTimeout(() => {
      console.info("Muestra notificación")
      this.$notify({
        group: "foo",
        title: "Vue notification",
        text: "Hello user! This is a notification!"
      });
    }, 2000);
  }
};
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
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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

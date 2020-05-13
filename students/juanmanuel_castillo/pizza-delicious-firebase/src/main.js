import Vue from "vue";
import App from "./App.vue";

import axios from "axios";
import VueAxios from "vue-axios";

import VueMoment from "vue-moment";
import moment from "moment/moment";
import "moment/locale/es";

import { BootstrapVue } from "bootstrap-vue";
import VueSweetalert2 from "vue-sweetalert2";

import { router } from "@/router"
import { store } from "@/store"

import "@/modules/firebase"

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://pizza-delicious-api.herokuapp.com/";

Vue.use(VueMoment, { moment });
Vue.use(VueAxios, axios);

Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);

Vue.filter("toMoney", function (value) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(value);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

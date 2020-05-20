import Vue from 'vue'

Vue.filter("toMoney", function (value) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(value)
})

<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <span class="flaticon-pizza-1 mr-1"></span>Pizza
        <br />
        <small>Delicious</small>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="oi oi-menu"></span> Menu
      </button>
      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="item in menu" :key="item.id">
            <router-link :to="item.path" class="nav-link">
              {{item.name}}
              <span
                v-show="item.id === 2 && listOrderCount!== 0"
                class="badge badge-warning badge-pill"
              >{{listOrderCount}}</span>
            </router-link>
          </li>
          <li class="nav-item" v-if="isAuth">
            <a href="#" class="nav-link text-danger" @click.prevent="logout">Cerrar sesión</a>
          </li>
          <li class="nav-item" v-else>
            <router-link to="/login" class="nav-link text-success">Acceder</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  props: ["menu"],
  computed: {
    //...mapGetters(["listOrderCount"])
    listOrderCount() {
      return this.$store.getters.listOrderCount;
    },
    isAuth() {
      return this.$store.state.isAuth;
    }
  },
  methods: {
    logout() {
      Auth.$fireAuth.signOut().then(
        () => {
          this.$store.commit("setCurrentUser", null);

          this.$router.push("/");
        },
        function(error) {
          //muestra error
          alert(error.message);
        }
      );
    }
  }
};
</script>
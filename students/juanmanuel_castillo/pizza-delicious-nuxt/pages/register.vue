<template>
  <section class="ftco-section contact-section">
    <div class="container mt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6">
          <form action="#" class="contact-form">
            <div class="row">
              <div class="col-md-12">
                <h3>Register</h3>
                <p>Please fill this form to create an account.</p>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    v-model="firstname"
                    type="text"
                    class="form-control"
                    placeholder="Your name"
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="lastname"
                    type="text"
                    class="form-control"
                    placeholder="Your surname"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input v-model="email" type="email" class="form-control" placeholder="Your email" />
                </div>
                <div class="form-group">
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    placeholder="Your password"
                  />
                </div>
              </div>
            </div>
            <div class="form-group d-flex justify-content-center">
              <input
                @click.prevent="register"
                type="submit"
                value="Registrar"
                class="btn btn-primary py-3 px-5"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  name: "RegisterPage",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
  },
  mounted() {},
  methods: {
    register() {
      this.$fireAuth.createUserWithEmailAndPassword(this.email, this.password)
        .then(response => {

          fireStore.collection('users').doc(response.user.uid).set({
            firstname: this.firstname,
            lastname: this.lastname,
            profile: "user"
          })
            .then(() => {
              this.$router.push("/");
            })
            .catch((error) => {
              alert(error.message)
            });

        })
        .catch(error => {
          //muestra error
          alert(error.message);
        });
    }
  }
};
</script>

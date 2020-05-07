<template>
    <section class="ftco-section contact-section">
        <div class="container mt-5">
            <div class="row d-flex justify-content-center">
                <div class="col-md-6 ">
                    <form action="#" class="contact-form">
                        <div class="row">
                            <div class="col-md-12">
                                <h3>Login</h3>
                                <p>Please enter your email and password to process to the customer area.</p>
                                <p>If you have't an account please click <router-link to="/register">here</router-link></p>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input v-model="email" type="text" class="form-control" placeholder="Your email">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input v-model="password" type="password" class="form-control" placeholder="Your password">
                                </div>
                            </div>
                        </div>
                        <div class="form-group d-flex justify-content-center">
                            <input @click.prevent="login" type="submit" value="Login" class="btn btn-primary py-3 px-5">
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import MainSlider from "@/components/MainSlider";
export default {
  name: "Login",
  data(){
    return{
      email:"",
      password:""
    }
  },
  methods:{
    async login(){
      let loginData = {
        email: this.email,
        password: this.password
      }
      let response = await this.axios.post('auth/login', loginData)
      this.$store.commit('setToken', response.data.token)

      if (this.$store.state.userLogged.profile==="admin"){
        this.$router.push('/admin')
      }else{
        this.$router.push('/myOrders')
      }
    }
  },
  components: {
    MainSlider
  }
};
</script>
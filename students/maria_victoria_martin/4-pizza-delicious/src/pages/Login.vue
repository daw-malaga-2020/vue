<template>
  <div>
<section class="ftco-section contact-section">
    <div class="container mt-5">
      <div class="row block-9">
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
                  <input v-model="email" type="email" class="form-control" placeholder="Your Email">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input v-model="password" type="password" class="form-control" placeholder="Your Password">
                </div>
                </div>
            </div>
            <div class="form-group">
              <input @click.prevent="login" type="submit" value="login" class="btn btn-primary py-3 px-5">
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>  
  </div>
</template>

<script>
import {auth} from '@/modules/firebase'

export default {
  name: 'Login',
  data(){
    return{
      email:"",
      password:""  
    }
  },
  methods:{
    login() {
        auth.signInWithEmailAndPassword(this.email, this.password)
      .then(user=>{
        this.$router.push('/')
      })
      .catch(error=>{
        alert(error.message);
      })
    }
    },
  components: {
  }
}
</script>


<template>
  <div class="container">
    <div class="header">
      <div class="logo-container">
        <img src="../assets/dashboard/logo.png" alt="logo">
        <p class="title">Log In</p>
      </div>
      <form action="" @submit.prevent= "handleSubmit()">
        <!-- Email -->
    <div class="form-group" :class="{ error: v$.user.email.$errors.length }">
    <label for="lname">Email Address</label><br />
    <input type="email" id="email" name="email"  v-model="v$.user.email.$model" /><br />
 </div>
  <!-- error message -->
      <div class="input-errors" v-for="(error, index) of v$.user.email.$errors" :key="index">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
      <!-- password -->
      <div class="form-group" :class="{ error: v$.user.password.$errors.length }">
        <label for="password">Password</label><br />
      <input type="password" id="password" name="password" v-model="v$.user.password.$model" /><br />
      </div>
      <!-- error message -->
      <div class="input-errors" v-for="(error, index) of v$.user.password.$errors" :key="index">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
  
       
         <button :disabled="v$.user.$invalid" class="signin">Sign In</button>
      </form>
      <div class="footer">
        <p>
          Don’t have an account yet?
          <router-link to="/signup">Sign Up</router-link>
        </p>
        <router-link to="/passwordreset"
          >Forgot Password?</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

export default {
  name: "siginView",
  
  data: () =>({
    user:{email:"",password:""},
     v$: useVuelidate() 
    
  }),
  validations() {
    return {
      user: {
        email: {
          required, email
        },
        password: {
          required,
          min: minLength(6)
        },
      },
    }
  },


  methods:{
    async  handleSubmit() {
       try {
        const response = await axios.post('http://localhost:5000/students/login', {
          email: this.user.email,
          password: this.user.password,
        });
        console.log(response)
        sessionStorage.setItem("session", JSON.stringify(response.data.data));
        this.$router.push('/applicationform')
      } catch (error) {
        console.log(error)
      }  
    }
  }
};
</script>

<style scoped>
.container{
  padding-top: 100px;
}
.logo-container {
  margin: auto;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logo-container {
  width: 110px;
  height: 21px;
}
.title {
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
  margin-top: 24px;
  font-style: italic;
}
form {
  width: 380px;
  margin: 0 auto;
}
label {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
  display: inline-block;
  margin-bottom: 5px;
  margin-top: 22px;
}
input {
  width: 100%;
  height: 40px;
  border: 1.5px solid #bdbdbd;
  padding: 8px;
  border-radius: 4px;
}
.signin {
  width: 397px;
  height: 50px;
  background: #7557d3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 16px;
}
.footer {
  width: 380px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-style: italic;
  font-weight: 500;
  font-size: 15px;
  color: #4f4f4f;
}
a {
  text-decoration-line: underline;
  color: #1a2c56;
}
.forgot-password {
  text-decoration: none;
}
.error-msg {
  color: red;
  font-size: small;
}
</style>
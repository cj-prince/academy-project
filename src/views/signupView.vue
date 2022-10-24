<template>
  <div class="container">
    <div class="header">
      <div class="logo-container">
        <img src="../assets/dashboard/logo.png" alt="logo" />
        <p class="title">Sign Up</p>
      </div>
      <form class="form-wrapper" @submit.prevent= "handleSubmit" >
         <span v-if="errorField">Please enter all fields</span>
        <div class="form-container">
          <div class="first-form">
            <label for="fname">First Name</label><br />
            <input type="text" id="fname"
             name="fname"
             v-model="first_name" required/><br />
            <label for="lname">Email Address</label><br />
            <input type="email" id="email"
            name="email" v-model="email" required/><br />
            <label for="password">Password</label><br />
            <span v-if="passwordCheck">Password must be more then 8 characters</span>
            <input type="password" id="password" 
            name="password" v-model="password" required/><br />
          </div>
          <div class="second-form">
            <label for="lname">Last Name</label><br />
            <input type="text" id="lname" name="lname" v-model="last_name" required/><br />
            <label for="tel">Phone Number</label><br />
            <input type="tel" id="tel" 
            name="tel" v-model="phone_number" required/><br />
            <label for="confirm-password">Confirm Password</label><br />
            <span v-if='passwordInvalid'>Password don't match</span>
            <input
              type="password"
              id="cpassword"
              name="cpassword" v-model="password_confirm" required/><br/>      
          </div>
        </div>
        <div class="signinDiv">
          <button class="sign-up">Sign Up</button>
        </div>
      </form>
      <p class="sign-in">
        Already have an account? <router-link to="/sigin">Sign In</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "signupView",
  data: () =>({
    first_name:'',
    last_name:'',
    email:'',
    phone_number:'',
    password:'',
    password_confirm:'',
    errorField: false,
    passwordInvalid: false,
    passwordCheck: false
  }),
  methods:{
    async  handleSubmit() {
      if(!this.first_name || !this.last_name || !this.email || !this.phone_number ||!this.password ||!this.password_confirm){
        return this.errorField = true
      }
      if(this.password !== this.password_confirm){
        this.passwordInvalid = true
      }
      if(this.password.length < 8){
        this.passwordCheck = true
      }
      try {
        const response = await axios.post('http://localhost:5000/students', {
          firstname: this.first_name,
          lastname: this.last_name,
          email: this.email,
          phone: this.phone_number,
          password: this.password,
        });
        sessionStorage.setItem("session", JSON.stringify(response.token));
         this.$router.push('/sigin')
      } catch (error) {
        console.log(error)
      }
    
      
    }
  }
}

</script>

<style scoped>

.container {
  font-family: "Lato", sans-serif;
  background: white;
  background-repeat: no-repeat;
  background-position: right -8% top -10%;
  padding-top: 100px;}
.header {
  width: 784px;
  margin: 0 auto;
}
.logo-container{
  margin: auto;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.heading img {
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
.form-wrapper {
  /* display: flex;
  flex-direction: column; */
}
.form-container{
  display: flex;
  justify-content: space-between;
  gap: 64px
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
  width: 365px;
  height: 40px;
  border: 1.5px solid #bdbdbd;
  border-radius: 4px;
  padding: 8px;
}
.signinDiv{
  display: flex;
  justify-content: center;
}
.sign-up {
  width: 520px;
  height: 50px;
  background: #7557d3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 16px;
}
.sign-in {
  font-weight: 500;
  font-size: 15px;
  line-height: 17px;
  color: #4f4f4f;
  text-align: center;
  font-style: italic;
}
a {
  text-decoration-line: underline;
  color: #1a2c56;
}
</style>
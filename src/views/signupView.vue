<template>
  <div class="container">
    <div class="header">
      <div class="logo-container">
        <img src="../assets/dashboard/logo.png" alt="logo" />
        <p class="title">Sign Up</p>
      </div>
      <form class="form-wrapper" @submit.prevent= "handleSubmit">
        <div class="form-container">
          <div class="first-form">
            <label for="fname">First Name</label><br />
            <input type="text" id="fname"
             name="fname"
             v-model="first_name"/><br />
            <label for="lname">Email Address</label><br />
            <input type="email" id="email"
            name="email" v-model="email"/><br />
            <label for="password">Password</label><br />
            <input type="password" id="password" 
            name="password" v-model="password"/><br />
          </div>
          <div class="second-form">
            <label for="lname">Last Name</label><br />
            <input type="text" id="lname" name="lname" v-model="last_name"/><br />
            <label for="tel">Phone Number</label><br />
            <input type="tel" id="tel" 
            name="tel" v-model="phone_number"/><br />
            <label for="confirm-password">Confirm Password</label><br />
            <input
              type="password"
              id="cpassword"
              name="cpassword" v-model="password_confirm"/><br/>      
          </div>
        </div>
       <!-- <router-link to='/sigin'> -->
        <button class="sign-up" >Sign Up</button>
      <!-- </router-link>   -->
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
   data(){
    return{
     first_name:'',
     last_name:'',
     email:'',
     phone_number:'',
     password:'',
     password_confirm:'',
    }
   },

   methods:{
  async  handleSubmit() {
 const response = await axios.post('signup', {
    first_name: this.first_name,
    email_name: this.email_name,
    phone_number: this.phone_number,
    password_name: this.password,
    password_confirm: this.password_confirm,
  });

  console.log(response)
    }
    }
}

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
body {
  font-family: "Lato", sans-serif;
}
.container{
   padding-top: 100px;
}
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
  display: flex;
  flex-direction: column;
}
.form-container{
  display: flex;
  justify-content: space-between;
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
  height: 48px;
  border: 1.5px solid #bdbdbd;
  border-radius: 4px;
  padding: 15px;
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
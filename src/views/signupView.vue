<template>
  <div class="container">
    <div class="header">
      <div class="logo-container">
        <img src="../assets/dashboard/logo.png" alt="logo" />
        <p class="title">Sign Up</p>
      </div>
      <form class="form-wrapper">
        <div class="form-container">
          <div class="first-form">
            <label for="fname">First Name</label><br />
            <input type="text" id="fname" name="fname" /><br />
            <label for="lname">Email Address</label><br />
            <input type="email" id="email" name="email" /><br />
            <label for="password">Password</label><br />
            <input type="password" id="password" name="password" /><br />
          </div>
          <div class="second-form">
            <label for="lname">Last Name</label><br />
            <input type="text" id="lname" name="lname" /><br />
            <label for="tel">Phone Number</label><br />
            <input type="tel" id="tel" name="phone-number" /><br />
            <label for="confirm-password">Confirm Password</label><br />
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
            /><br />
          </div>
        </div>
        <div class="signinDiv">
          <router-link to='/sigin'><button class="sign-up">Sign Up</button></router-link> 
        </div>
       
      </form>
      <p class="sign-in">
        Already have an account? <router-link to="/sigin">Sign In</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
   name: "signupView",
};
</script>

<style scoped>
.container {
  font-family: "Lato", sans-serif;
  background: white;
  background-repeat: no-repeat;
  background-position: right -8% top -10%;
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
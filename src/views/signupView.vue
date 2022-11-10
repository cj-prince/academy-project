<template>
  <div class="container">
    <div class="header">
      <div class="logo-container">
        <img src="../assets/dashboard/logo.png" alt="logo" />
        <p class="title">Sign Up</p>
      </div>
      <Error   :error='error'  v-if="error" />
      <form class="form-wrapper" @submit.prevent= "handleSubmit" >
        <div class="form-container">
          <div class="first-form">
            <label for="fname">First Name</label><br />
            <input type="text" id="fname" name="fname" v-model="v$.user.firstname.$model" /><br />
            <!-- Error Message -->
            <div class="input-errors" v-for="(error, index) of v$.user.firstname.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
            <label for="lname">Email Address</label><br />
            <input type="email" id="email" name="email" v-model="v$.user.email.$model" /><br />
            <!-- Error Message -->
            <div class="input-errors" v-for="(error, index) of v$.user.email.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
            <label for="password">Password</label><br />
            <input type="password" id="password" name="password" v-model="v$.user.password.$model" /><br />
            <!-- Error Message -->
            <div class="input-errors" v-for="(error, index) of v$.user.password.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
          <div class="second-form">
            <label for="lname">Last Name</label><br />
            <input type="text" id="lname" name="lname" v-model="v$.user.lastname.$model" /><br />
            <!-- Error Message -->
            <div class="input-errors" v-for="(error, index) of v$.user.lastname.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
            <label for="tel">Phone Number</label><br />
            <input type="tel" id="tel" name="tel" v-model="v$.user.phone_number.$model" maxlength="11" pattern="\d{11}"/><br />
            <!-- Error Message -->
            <div class="input-errors" v-for="(error, index) of v$.user.phone_number.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>

            <label for="confirm-password">Confirm Password</label><br />
            <input  type="password" id="confirmPassword" name="confirmPassword"
              v-model="v$.user.confirmPassword.$model" /><br />

            <!-- Error Message -->
            <div class="input-errors" v-for="(error, index) of v$.user.confirmPassword.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
        </div>
        <div class="signinDiv">
          <button class="sign-up" :disabled="v$.user.$invalid">Sign Up</button>
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
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import Error from '@/components/error.vue'


export function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
}
export default {
  name: "signupView",
  components:{Error},
  data: () => ({
    user: {
      firstname: '',
      lastname: '',
      email: '',
      phone_number: '',
      password: '',
      confirmPassword: '',
    },
    error: '',
    v$: useVuelidate()

  }),
  validations() {
    return {
      user: {
        firstname: {
          required, name_validation: {
            $validator: validName,
            $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
          }
        },
        lastname: {
          required, name_validation: {
            $validator: validName,
            $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
          }
        },
        email: { required, email },
        password: { required, min: minLength(8), },
        confirmPassword: {
          required 

        },
        phone_number: {
          required, min: minLength(11),

        }
      },
    }
  },
  methods:{
    async  handleSubmit() {
      // if(!this.first_name || !this.last_name || !this.email || !this.phone_number ||!this.password ||!this.password_confirm){
      //   return this.error = "Fields cant be empty"
      // }
      if(this.user.password !== this.user.confirmPassword){
        return this.error = "Password don't match"
      }
      // if(this.password.length < 8){
      //   return this.error = "Must be greater than 8 chacters"
      // }
      try {
        const response = await axios.post('http://localhost:5000/students', {
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          email: this.user.email,
          phone: this.user.phone_number,
          password: this.user.password,
        });
        sessionStorage.setItem("session", JSON.stringify(response.token));
        this.$toast.success(`Signup successful`)
        this.$router.push('/sigin')
      } catch (error) {
        this.$toast.error(`Please try again`)
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
  padding-top: 100px;
}

.header {
  width: 784px;
  margin: 0 auto;
}

.logo-container {
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

.form-container {
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

.signinDiv {
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

.error-msg {
  color: red;
  font-size: small;
}
</style>
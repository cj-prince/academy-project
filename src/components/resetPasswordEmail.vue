<template>
  <div class="main">
    <h2>Forgot Password</h2>
    
    <div class="email-div">
      <p>Please enter email address</p>
      <input type="email"  v-model="email">
    </div>
    <button @click="handleSubmit()">Submit</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "ForgotPasswordPage",
  components: {
   
  },
  data:() => ({
   email: ''
  }),
  methods:{
    async handleSubmit(){
      console.log(this.email)
      try {
          const response = await axios.post('http://localhost:5000/students/forgotpassword', {
            email: this.email
          })
          sessionStorage.setItem("s", JSON.stringify(response.email));
      } catch (error) {
        console.log(error)
      }
       
      
    }
  },
};
</script>
<style scoped>
input{
  width: 490px;
  padding: 10px 15px;
  border: 1.5px solid #BDBDBD;
  border-radius: 4px; 
  outline: none;
}
p{
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #7D7D7D;
  margin-bottom: 5px;
  margin-left: -336px;
}
h2{
    padding: 26px;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    color: #2B3C4E;
}
.main{
  font-family: "Lato", sans-serif;
    max-width: 700px;
    max-width: 700px;
    margin: auto;
    box-shadow: 5px 5px 20px 0px #e7e1e1;
    font-family: 'Lato', sans-serif;
    margin-top: 70px;
    text-align: center;
}

.email-div{
   
}

button{
  width: 180px;
  background: #7557d3;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 12px;
  margin-bottom: 28px;
  padding-block: 16px;
  cursor: pointer;
}
</style>
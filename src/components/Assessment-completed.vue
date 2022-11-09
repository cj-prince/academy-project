<template>
  <div class="container">
    <firstdashboard />
    <div class="assessment-icon">
      <div class="assessment-and-timer-icon">
        <div class="Div1">
          <h1>Assessment Completed</h1>
          <p>Thank you!</p>
        </div>
        <div class="timer">
          <p>Timer</p>
          <p>23<span>min</span>043<span>sec</span></p>
        </div>
        </div>
        <div class="center-icon">
        <div class="icon">
            <img src="../assets/dashboardone/confetti.png" alt="">
        </div>
        <p class="textP">We have received your assessment test, we will get back to you soon. <br>
          Best of luck</p>
        <button @click="removeSession"> Home</button>
      </div>
    </div>
    
  </div>
</template>

<script>
import firstdashboard from './firstdashboard.vue'
export default {
  name: 'assessment-completed',
  components:{firstdashboard},
  data: () => ({

  }),
  methods:{
  removeSession() {
      localStorage.removeItem("questions")
      this.$router.push("/dashboard")
    }
  }
}
</script>


<style scoped>
.container{
  display: flex;
}
.assessment-icon{
  margin: 107px 0 86px 290px;
  padding: 0 58px; 
} 
.assessment-and-timer-icon{
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 412px;
}
.Div1 h1{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-size: 43px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2B3C4E;
}
.Div1 p{
  margin-top: 14px;
  font-family: 'Lato';
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2B3C4E;
}

.timer-icon p:first-child{
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2B3C4E;
}
.assessment-and-timer{
  display: flex;
  justify-content: space-between;
  margin-left:47px;
  margin-bottom:130px;

}
.timer p:first-child{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4F4F4F;
}
.timer p:nth-of-type(2) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  color: #2B3C4E; 
  margin-top: -17px;   
}
.timer p:nth-of-type(2) span{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #4F4F4F;
}
.center-icon{
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 154px;
}
.textP{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  margin-top: 21px;
  margin-bottom: 34px;
  color: #4F4F4F;
}
.center-icon button{
  padding: 10px 40px;
  background: #7557D3;
  border-radius: 4px;
  border: none;
  color: #fff;
}
</style>
<template>
  <div class="container">
  <firstdashboard />

  <div class="assessment-icon">
    <div class="assessment-and-timer-icon">
      <div>
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
              <img src="../assets/dashboardone/congratution-icon.png" alt="">
          </div>
          <p>We have received your assessment test, we will get back to you soon. <br>
            Best of luck</p>
          <button> Home</button>
      </div>
    </div>
  </div>
</template>
<script>
import firstdashboard from './firstdashboard.vue'
export default {
  name: 'first-dashboard',
  components:{firstdashboard},
  data: () => ({

  }),
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
  align-items: center;
  justify-content: space-between;
  gap: 412px;
}
.assessment-icon h1{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2B3C4E;
}
.assessment-icon p{
  margin-top: 14px;
  font-family: 'Lato';
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2B3C4E;
}

.timer-icon p:first-child{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4F4F4F;
}
.timer-icon p:nth-of-type(2) {
font-family: 'Lato';
font-style: normal;
font-weight: 300;
font-size: 48px;
line-height: 58px;
color: #2B3C4E;    
}
.timer-icon p:nth-of-type(2) span{
  font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #4F4F4F;
}
.center-icon{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 164px;
}
.center-icon p{
  font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16.7273px;
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
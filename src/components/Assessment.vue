import firstdashboard from '@/components/firstdashboard.vue';
<template>
  <div class="container">
    <firstdashboard/>

    <div class="assessment">
      <div class="assessment-and-timer">
        <div class="assessmentDiv">
          <h1>Take Assessment</h1>
          <p>Click the button below to start assessment, you have limited time for this test</p>
        </div>
        <div class="timer-icon">
            <p>Timer</p>
            <p>00<span>min</span>000<span>sec</span></p>
        </div>
      </div>
      <div class="center-icon">
        <div class="icon">
              <img src="../assets/dashboardone/hourglass.png" alt="">
        </div>
        <p>We have 4 days left until the next assessment<br>
            Watch this space</p>
            <router-link to="/questions"><button>Take Assessment</button></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import firstdashboard from './firstdashboard.vue'
export default {
  name: 'Assessment-',
  components:{
    firstdashboard,
  },
  data: () => ({
  
  }),
}
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
    
* {
font-family: 'Lato', sans-serif;
color: #2B3C4E;
margin:0;
padding:0;
}
.container{
display: flex;
gap: 47px;
}
.assessment{
margin: 90px 0 86px 292px;
width: 100%;
padding: 0 47px;
}
.assessment-and-timer{
  display: flex;
  justify-content: space-between;
  margin-left:47px;
  margin-bottom:130px;
}
.timer-icon{
  display: flex;
  justify-content: space-between;
  margin:left;
  
}
.assessmentDiv{
  padding-top: 107px;
  padding-right: 82px;
  width: 100%;
  margin-left: 350px
} 
.assessmentDiv h1{
font-style: normal;
font-weight: 300;
font-size: 43.5555px;
line-height: 52px;
letter-spacing: -0.02em;
color: #2B3C4E;
margin-bottom:14px;
}
.assessmentDiv p{
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
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.center-icon p{
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16.7273px;
line-height: 20px;
text-align: center;
margin-bottom: 24px;
color: #4F4F4F;
}
.button{
width: 205px;
height: 41px;
background-color:#B1B1B1;
color:white;
border:none;
border-radius:4px;     
}
</style>
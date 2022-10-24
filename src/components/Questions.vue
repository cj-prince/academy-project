import firstdashboard from '.';
<template>
  <div class="container">
    <firstdashboard/>
  </div>
    <div class="assessment">
      <div class="assessment-and-timer">
        <div class="assessmentDiv">
          <h1>Take Assessment</h1>
          <p>Click the button below to start assessment, you have limited time for this test</p>
        </div>
        <CountDownTimer/>
        <div class="questions">
            <div class="question-1">
              <p>Question 1</p>
            <h2>What is the purpose of HDR technology?</h2>
            </div>
            <div class="navigate">
              <div class="options">
                <input type="radio" value="A"/>
                <label for="A">A. To reduce the file size of images and videos.</label><br>
              </div>
              <div class="options">
                <input type="radio" value="B" />
                <label for="B">B. To speed up 3D rendering performance.</label><br>
              </div>
              <div class="options">
                <input type="radio" value="C" />
                <label for="C">C. To support higher video resolutions.</label><br>
              </div>
              <div class="options">
                <input type="radio" value="D" />
                <label for="D">D. To display more colors in images and videos</label>
              </div>
              
          </div>
          <div class="buttons-icon">
            <div class="buttons">
                <button class="previous">Previous</button>
                <button class="next">Next</button>
            </div>
            <router-link to="/final">
                <button class="finish">Finish</button>
            </router-link>
          </div>
          
        </div>
      </div>
  </div>
</template>

<script>
import firstdashboard from './firstdashboard.vue'
import CountDownTimer from './CountDownTimer.vue'
export default {
  name: 'Questions-',
  components:{
    firstdashboard,
    CountDownTimer,
  },
}
  
  
  
  
  
</script>


<style scoped>

.container{
  display: flex;
  gap: 47px;
}
.assessment-icon{
  margin: 107px 0 86px 290px;
  padding: 0 58px; 
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
.assessment-and-timer{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.assessment{
  margin: 90px 0 8px 292px;
  width: 100%;
  padding: 0 47px;
}
.assessmentDiv {
align-items: center;
}

.assessmentDiv h1{
margin-bottom: 14px;
font-style: normal;
font-weight: 300;
font-size: 43.5555px;
line-height: 52px;
letter-spacing: -0.02em;
color: #2B3C4E;
}
.assessmentDiv p{
margin-top: 14px;
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
  margin-top: -17px;
}
.timer-icon p:nth-of-type(2) span{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #4F4F4F;
}
.questions{
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.questions p{
  font-family: 'Lato';
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #2B3C4E;
}
.active{
  width: 355.08px;
  height: 33px;
  background: #31D283;
}
.questions h2{
  font-family: 'Lato';
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2B3C4E;
  margin-top: 14px;  
}
.navigate{
  display: flex;
  flex-direction:column;
}

.options{
  display: flex;
  gap: 10px;
  margin-top: 37px;
  color: #2B3C4E;
}
.buttons-icon{
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  margin-top:80px;
}
.buttons{
  display:flex;
  flex-direction:row;
  align-items:center;
  margin-bottom:80px;
}

.previous{
  border: 1px solid #00000040;
  width: 125px;
  height: 41px;
  margin-right:220px;
  color:#211F26;
}
.next{
  width: 125px;
  height: 41px;
  background-color:#7557D3;
  color:white;
  border-radius:4px;
  border:none;
}
.finish{
  width: 205px;
  height: 41px;
  background-color: #CECECE;
  color: white;
  border: none;
  border-radius: 4px;
  margin-bottom:206px;
  cursor: pointer;
}
</style>
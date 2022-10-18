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
        <p>00<span>min</span>010<span>sec</span></p>
      </div>
      </div>
      <div class="questions">
          <div class="question-1">
          <p>Question 1</p>
          <h2>What is the purpose of HDR technology?</h2>
          </div>
          <div :class="{'active': isActive}">
          <input type="radio" id="A" name="question" value="A"/>
          <label for="A">A. To reduce the file size of images and videos.</label><br>
          <input type="radio" id="B" name="question" value="B" />
          <label for="B">B. To speed up 3D rendering performance.</label><br>
          <input type="radio" id="C" name="question" value="C" />
          <label for="C">C. To support higher video resolutions.</label><br>
          <input type="radio" id="D" name="question" value="D" />
          <label for="D">D. To display more colors in images and videos</label>
          </div>
          <div class="buttons-icon">
                    <div class="buttons">
                        <button class="previous">Previous</button>
                        <button class="next">Next</button>
                    </div>
                        <router-link to="/successful">
                            <button class="finish">Finish</button>
                        </router-link>
                </div>
      </div>
  </div>
  </div>
</template>

<script>
import firstdashboard from './firstdashboard.vue'
export default {
  name: 'Questions-',
  components:{
    firstdashboard,
  },
  data() {
  return{
  isActive:false
  }
  },
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
margin: 90px 0 8px 292px;
width: 100%;
padding: 0 47px;
width: 100%;
}
.assessment-and-timer{
display: flex;
justify-content: space-between;
margin-left: 47px;
margin-bottom: 64px;
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
    width: 406px;
    height: 299px;
    margin-left: 47px;
    margin-bottom:206px;
}
.questions p{
font-style: italic;
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: #2B3C4E;
width: 65px;
height: 17px;
margin-bottom:14px;
}

.questions h2{
font-style: italic;
font-weight: 500;
font-size: 24px;
line-height: 29px;
color: #2B3C4E;
margin-top: 14px;  
display:inline-block;
width: 406px;
height: 29px;
margin-bottom:48px;
}
input{
    width: 8px;
    height: 8px;
    margin-right:42px;
    border: 1px solid #2B3C4E;
    margin-bottom: 37px;
}
label{
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    width: 252px;
    height: 20px;
    color: #2B3C4E;
}
.active{
width: 355.08px;
height: 33px;
background: #31D283;
}
.buttons-icon{
display:flex;
flex-direction:column;
margin-left:193px;
margin-bottom: 80px;
margin-top:80px;
justify-content:center;
align-items: center;
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
}
</style>
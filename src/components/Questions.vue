<template>
  <div class="container">
 <first-dashboard></first-dashboard>
  <div class="assessment-icon">
      <div class="assessment-and-timer">
          <div>
              <h1>Take Assessment</h1>
              <p>Click the finish button below to submit assessment, you can go back at any time to edit your<br>
              answers.</p>
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
export default {
  name: 'first-dashboard',
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
.assessment-icon{
  padding-top: 107px;
  padding-right: 82px;
 
  width: 100%;
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
    margin-left:193px;
    margin-bottom:80px;
    margin-top:80px;
    justify-content:center;
    align-items: center;
}
.buttons-icon{
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
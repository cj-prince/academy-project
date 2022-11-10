import firstdashboard from '.';
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
            <p>0{{mins}}<span>min</span>0{{secs}}<span>sec</span></p>
      </div>
      </div>
      <!-- <loadingState v-if="loading"/> -->
        <div class="questions">
            <div class="question-1">
              <p>Question {{currentQuestion+1}}</p>
            <h2>{{questions[currentQuestion]?.question}}</h2>
            </div>
            <div class="navigate">
              <div class="options">
                <input type="radio" value="0" v-model="userAnswers[currentQuestion]"/>
                <label for="questions[currentQuestion].options[0].text">A. {{questions[currentQuestion]?.options[0]?.text}}</label><br>
              </div>
              <div class="options">
                <input type="radio" value="1"  v-model="userAnswers[currentQuestion]" />
                <label for="this.questions[currentQuestion].options[1].text">B. {{questions[currentQuestion]?.options[1]?.text}}</label><br>
              </div>
              <div class="options">
                <input type="radio" value="2" v-model="userAnswers[currentQuestion]" />
                <label for="this.questions[currentQuestion].options[2].text">C. {{questions[currentQuestion]?.options[2]?.text}}</label><br>
              </div>
              <div class="options">
                <input type="radio" value="3" v-model="userAnswers[currentQuestion]" />
                <label for="this.questions[currentQuestion].options[3].text">D. {{questions[currentQuestion]?.options[3]?.text}}</label>
              </div>
              
          </div>
          <div class="buttons-icon">
            <div class="buttons">
                <button class="previous" @click="preQuest">Previous</button>
                <button @click="nextQuest" :class="btnNextQuest()">Next</button>
            </div>
            <router-link to="/final">
                <button :disabled="!isDisabled()" @click="submit" :class="btnBg()">Finish</button>
            </router-link>
          </div>
          
        </div>
      </div>
  </div>
</template>

<script>
import firstdashboard from './firstdashboard.vue'
import axios from 'axios'
export default {
  name: 'Questions-',
  components:{
    firstdashboard,
  },
  data:() => ({
    isActive:false,
    mins: 30,
    secs: 0,
    currentQuestion: 0,
    selectedAnswers:{},
    showScore: false,
    score:0,
    btn: "finish",
    btnFinish: "btn-finish",
    btnNext: "next",
    noNext: "second-btn-drop",
    countDown : 30,
    timer:null,
    startQuiz: false,
    userAnswers: new Array().fill(""),
    questions:[],
    loading: false
  }),
  methods:{
    btnBg(){
      if(this.currentQuestion >= 1){
      return this.btnFinish
      } 
        return this.btn
    },
    btnNextQuest(){
      if(this.currentQuestion === 30){
        return this.noNext
        } 
      return this.btnNext
    },
    startTimer(duration) {
      let timer = duration
      setInterval(() => {
          this.mins = parseInt(timer / 60, 10);
          this.secs = parseInt(timer % 60, 10);
          this.mins = this.mins < 10 ? "0" + this.mins : this.mins;
          this.secs = this.secs < 10 ? "0" + this.secs : this.secs;
          if (--timer < 0) {
              timer = duration;
          }
      }, 1000);
    },
    nextQuest(){
      if(this.currentQuestion === this.questions.length - 1) return 
        this.currentQuestion += 1
    },
    preQuest(){
      if(this.currentQuestion === 0) return 
        this.currentQuestion -= 1
    },
    async  handleQuestions() {
      try {
                
        const response = await axios.get('http://localhost:5000/accessment');
        // console.log(response)
         
        this.questions = JSON.parse(response.data.data['0'].question)
        localStorage.setItem("questions", JSON.stringify(this.questions))
        // console.log('questions>>',this.questions)
      } catch (error) {
        console.log(error)
      }
    
    },
    async submit(){
        // this.$router.push('/final');
      
        try {
          const setScore = JSON.parse(localStorage.getItem("questions"))
          console.log('checking',setScore)

          for (let i =0; i < setScore.length; i++){
              const options = setScore[i].options
              const answer = Number(this.userAnswers[i])
              console.log('okkk',options)
              
              if(options[answer].correct){
                this.score++
              }

              console.log('noww >>>>',this.score)
              
          }
          const response = await axios.patch(`http://localhost:5000/students/update/${this.user.id}`,{
          score: this.score,
        });
        this.$toast.info(`Assessment Submitted`)
       
       console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    isDisabled(){
      if(this.currentQuestion >=1) return true
    },
    
  },
   created(){
    
   
  
  },
  mounted() {
   this.handleQuestions() 
    console.log(this.submit())

    const thirtyMins = 60 * 30
    this.startTimer(thirtyMins)

    const session = sessionStorage.getItem('session')
     const parsedSession = JSON.parse(session)
     this.user = parsedSession.student
     console.log(this.user)
     
  },
  watch:{
    userAnswers:{
      handler(userAnswers,id){
      console.log('answer',...userAnswers)
        console.log("id", id)
      },
      deep:true
    },
    secs(secs){
      if(Number(secs)===0 && Number(this.mins)===0){
        this.submit()
      }
    }
  }
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
  background: transparent;
  cursor: pointer;
}
.next{
  width: 125px;
  height: 41px;
  background-color:#7557D3;
  color:white;
  border-radius:4px;
  border:none;
  cursor: pointer;
}
.finish{
  width: 205px;
  height: 41px;
  background-color: #CECECE;
  color: white;
  border: none;
  border-radius: 4px;
  margin-bottom:206px;
  cursor: no-drop;
}

.btn-finish {
  border: none;
  box-sizing: border-box;
  border-radius: 4px;
  background: #7557D3;
  border-radius: 4px;
  width: 205px;
  height: 41px;
  font-size: 16px;
  line-height: 19px;
  color: white;
  cursor: pointer;
}

.second-btn-drop {
  background: #ffffff;
  border-radius: 4px;
  color: rgb(0, 0, 0);
  width: 125px;
  height: 41px;
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  cursor: no-drop;
  margin: 50px 78px 30px 134px;
}
</style>
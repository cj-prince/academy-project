import firstdashboard from '.';
<template>
  <div class="first-container">
      <firstdashboard />
  <div class="wrapper">
    <h1>Dashboard</h1>
    <p class="first-line">Your Application is currently being review, you wil be notified if successful</p>
      <div class="firstline-status">
          <div class="Information">
              <p class="doa">Date of Application</p>
              <p class="data">{{getFormattedDate(user.created_at)}}</p>
              <hr>
              <p class="comments">{{daysRemain}} days since applied</p>
          </div>
          <div class="second-line">
              <p class="doa">Application Status</p>
              <p class="data">{{user.is_verified ===true? "APROVED":"PENDING"}}</p>
              <hr v-if="user.is_verified === null" class="second-linehr">
              <hr v-if="user.is_verified !== null" class="active">
              <p class="comments">We will get back to you</p>
          </div>
      </div>
      <div class="third-line">
          <div class="updates">
              <p class="finfo">Updates</p>
              <textarea name="updates" id="notes" cols="40" rows="6" class="notes"></textarea>
          </div>
          <div class="assessments">
              <p class="tline">Take Assessment</p>
              <div class="assessment-details">
                  <p>We have 4 days left until the next assessment</p>
                  <p>Watch this space</p>
                  <router-link to="/assessment"><button>Take Assessment</button></router-link>
              </div>
          </div>
      </div>
  </div>
  </div>

</template>

<script>
import firstdashboard from './firstdashboard.vue'
import moment from 'moment';
  export default {
  name: 'DashBoard',
  components: {
      firstdashboard 
  },
  data: () =>({
    user:{is_verified:false,created_at:""},
    daysRemain:''
  }),
  methods:{
     getFormattedDate(date) {
         return moment(date).format("YYYY.MM.DD")
    }

  
  },
    mounted(){
    const session = sessionStorage.getItem('session')
     const parsedSession = JSON.parse(session)
     this.user = parsedSession.student
      console.log(this.user)

    let dateChange = moment(this.user.created_at).fromNow(true)
    this.daysRemain = dateChange
  },
  computed:{
   
  }

  }
</script>

<style scoped>
.first-container{
    display: flex;
    font-family:"Lato", sans-serif ;   
 }
.wrapper{
margin: 107px 0 86px 290px;
padding: 0 58px 
}
.wrapper h1{
font-weight: 300;
font-size: 43.56px;
letter-spacing: -0.02em;
}
.first-line{
font-weight: 500;
font-style: italic;
margin: 14.28px 0 61px;
}
.firstline-status{
display: flex;
gap: 87px
 }
.doa{
    font-size:14px;
    color: #4F4F4F;
 }
.data{
    font-weight: 300;
    font-size: 48px;
    color: #2B3C4E;
 }

hr{
 width: 148px;
border: 4px solid #006DF0;
border-radius: 4px;
margin: 19px 0 9px;
 }
.second-linehr{
    border: 4px solid #F09000;
 }
 .active{
     border: 4px solid #12C52F;
 }
 .seconded-line>hr{
    border: 4px solid #12C52F;;
 }
.comments{
font-size: 12px;
font-weight: 400;
color: #4F4F4F;
margin-bottom: 97px;
}
.third-line{
display: grid;
grid-template-columns: repeat(2, 50%);
grid-template-rows: 100%;
gap: 74px
 }
 .updates,.assessments{
border: 1px solid #ECECF9;
border-radius: 4px;
padding: 25px 35px;
 }
 .tline{
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #2B3C4E;
 }
 .notes{
  background-attachment: local;
  background-image:
  linear-gradient(to right, white , transparent 0),
  linear-gradient(to left, white 0, transparent 0),
  repeating-linear-gradient(white, white 59px, #ccc 60px, #ccc 50px, white 50px);
  line-height: 60px;
  outline: none;
  resize: none;
  border: none;
 }
.assessment-details{
    text-align: center;
    font-size: 16.73px;
    font-weight: 400;
    line-height: 20.07px;
    color: #4F4F4F;
    margin: 144px 0
 }
.assessment-details button{
    background-color: #B1B1B1;
    color: white;
    cursor: pointer;
    border: none;
    outline: none;
    padding: 10px 42px;
    border-radius: 4px;
    font-weight: 700;
    margin-top: 34px;
}

.assessment-details.active{
    background-color: #12C52F;;
    color: white;
    cursor: pointer;
    border: none;
    outline: none;
    padding: 10px 42px;
    border-radius: 4px;
    font-weight: 700;
    margin-top: 34px;
}

.assessment-details a{
    outline: none;
    border: none;
}
</style>
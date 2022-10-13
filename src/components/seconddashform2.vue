<template>
    <div class="first-container">
    <div class="wrapper">
      <h1>Dashboard</h1>
      <p class="first-line">Your Application is currently being review, you wil be notified if successful</p>
        <div class="firstline-status">
            <div class="Information">
                <p class="doa">Date of Application</p>
                <p class="data">09.09.19</p>
                <hr>
                <p class="comments">4 days since applied</p>
            </div>
            <div class="second-line">
                <p class="doa">Application Status</p>
                <p class="data">Approveed</p>
                <hr>
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
                    <button>Take Assessment</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  
  </template>
  
  <script>
    export default {
    name: 'DashBoard',
    components: {
    }
    }
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
  * {
        font-family: "Lato", sans-serif;
        color: #2B3C4E;
  }
  .first-container{
  display: flex
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
  font-size: 48px
   }
  
  hr{
   width: 148px;
  border: 4px solid #006DF0;
  border-radius: 4px;
  margin: 19px 0 9px;
   }
  .second-line>hr{
  border: 4px solid #F09000;
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
  .assessment-details>button{
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
  </style>
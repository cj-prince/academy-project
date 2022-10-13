<template>
  <div class="firstdashboard">
    <div class="first-container">
      <div><img src="../assets/dashboardone/Ellipse.png" alt="ellipse"></div>
      <p class="name">Jane Doe</p>
      <p class="email">doe@enyata.com</p>
      </div>
      <div class="buttons">
            <router-link to="/dashboard"><button><img src="../assets/dashboardone/Group.png" alt="dashboard icon" class="nav-button-img">Dashboard</button></router-link>
            <router-link to="/assessment"><button class="assessment-button"><img src="../assets/dashboardone/Vector2.png" alt="assessment icon" class="nav-button-img">Assessment</button></router-link>
            <router-link to="/logout"><button><img src="../assets/dashboardone/Vector3.png" alt="logout icon" class="nav-button-img">Log Out</button></router-link>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
    *{
    font-family: 'Lato', sans-serif;
    font-size: 16px
    }
.firstdashboard{
  width: 292px;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  height: 100vh;
  position: fixed
  }
.first-container{
background-color: #7557D3;
padding: 57px 91px;
text-align: center;
color: #FFFFFF;
letter-spacing: -0.02em;
margin-bottom: 28px
}

.name{
margin: 13px 0 5px;
font-weight: 700;
font-size: 20px;
}
.email{
font-style: italic;
font-weight:400;
}
.button-img{
margin-right: 16.56px;
}
.button{
height: 49px;
display: block;
background-color:#FFFFFF;
color: #2B3C4E;
outline: none;
border:none;
border-left: 4px solid #FFFFFF;
padding-left: 30px;
cursor: pointer;
line-height: 19.2px;
text-align: left;
width: 100%;

}

.buttons{
display:flex;
flex-direction: column;
margin: 28px 0 57px;
}

button:active, button:focus{
border-left: 4px solid #7557D3;
font-weight: 700;
}
a{
text-decoration: none;
}
.assessment-button{
 margin: 28px 0 57px
}
.logout-button{
 margin: 15px 0 57px
}
</style>

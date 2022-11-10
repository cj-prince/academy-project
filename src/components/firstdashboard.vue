<template>
  <div class="firstdashboard">
    <div class="first-container">
      <div class="sideImg"><img :src="showImage" alt="ellipse"></div>
      <p class="name">{{user.firstname + ' ' + user.lastname}}</p>
      <p class="email">{{user.email}}</p>
      </div>
      <div class="buttons">
        <div class="sideBar-icons">
          <div @click="activeBtn = 'btn1'" :class="{active: activeBtn === 'btn1' }">
              <router-link to="/dashboard">
            <img src="../assets/dashboardone/Group.png" alt="dashboard icon" class="nav-button-img"> <span>Dashboard</span> </router-link>
          </div>
          <div @click="activeBtn = 'btn2'" :class="{active: activeBtn === 'btn2' }">
            <router-link to="/assessment"><img src="../assets/dashboardone/Vector2.png"><span>Assessment</span> </router-link>
          </div>
         
        </div>
            
        <div class="sideBar-log">
          <router-link to="/"><img src="../assets/dashboardone/Vector3.png" alt="logout icon" class="nav-button-img"><span>Log Out</span> </router-link>
        </div>
            
      </div>
  </div>
</template>

<script>
export default {
  name: 'first-dashboard',
  data: () => ({
    activeBtn:'',
    user:{email:"",firstname:"",lastname:'',},
    img1: '../assets/dashboardone/Ellipse.png'
  }),
  mounted(){
    const session = sessionStorage.getItem('session')
     const parsedSession = JSON.parse(session)
     this.user = parsedSession.student
  },
  computed:{
    showImage(){
      if(this.user.image === null){
        return this.img1
      }
      return this.user.image
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.firstdashboard{
  font-family: 'Lato', sans-serif;
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
.sideImg img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: white;
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
.buttons a{
  display:flex;
  align-items: center;
  margin-inline: 38px;
  gap: 21px;
  background-color:#FFFFFF;
  color: #2B3C4E;
  padding: 10px;
  cursor: pointer;
  width: 100%;
}
.buttons{
  display:flex;
  flex-direction: column;
  margin: 28px 0 57px;
}

.sideBar-log{
  margin-top: 57px;
}

a{
  text-decoration: none;
}
.active{
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

a{
  text-decoration: none;
}

</style>

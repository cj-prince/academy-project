<template>
  <div class="container">
    <div class="header">
      <div class="logo-con">
        <img src="../assets/dashboard/logo.png" alt="" />
        <p class="title">Application Form</p>
      </div>
      <form class="form-container" enctype="multipart/form-data"  @submit.prevent="">
        <div class="uploads">
          <div class="uploads-image">
            <button class="upload-buttons" @click="$refs.cv.click()">
              <img src="../assets/Icons/Group.svg" alt="upload-icon" class="upload-img" />
              Upload CV
            </button>
             <input id="file-upload"  name="cv" :v-model="user.cv" type="file" ref="cv" @change="handleCvUpload" style="display: none"/>
             <span v-if="user.cv">name.doc</span>
          </div>
          <div class="uploads-image">
            <button class="upload-buttons" @click="$refs.image.click()">
              <img src="../assets/Icons/Group.svg" alt="upload-icon" class="upload-img" />
              Upload Photo
            </button>
            <input
            id="image-upload" name="image" :v-model="user.image" type="file" accept=".jpg, .jpeg, .png" ref="image" @change="handleImageUpload" style="display: none"/>
            <span v-if="user.image">image/png</span>
          </div>
          
        </div>
        <div class="form-sub-container" >
          <div class="form-right">
            <label for="fname">First Name</label><br />
            <input type="text" id="fname" name="fname" v-model="user.firstname" /><br />
            <label for="email">Email</label><br />
            <input type="email" id="email" name="email" v-model="user.email" /><br />
            <label for="address">Address</label><br />
            <input type="text" id="address" name="address" v-model="user.address"/><br />
            <label for="course">Course of Study</label><br />
            <input type="text" id="course" name="course" v-model="user.course_of_study" /><br />
          </div>
          <div class="form-left">
            <label for="lname">Last Name</label><br />
            <input type="text" id="lname" name="lname" v-model="user.lastname" /><br />
            <label for="dob">Date of Birth</label><br />
            <input type="text" id="dob" name="dob" v-model="user.dob" /><br />
            <label for="university">University</label><br />
            <input type="text" id="university" name="university" v-model="user.university" /><br />
            <label for="cgpa">CGPA</label><br />
            <input type="text" id="cgpa" name="cgpa" v-model= user.cgpa /><br />
          </div>
        </div>
        <div class="submitDiv">
          <button class="submit" @click="handleSubmit()">Submit</button>
        </div>
        
      </form>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'
export default {
  name: "ApplicationFormView",
  data:()=> ({
    user:{email:"",firstname:"",lastname:'',
    course_of_study:'',address:'',university:"",dob:'',cgpa: 0,cv: "",image: "",is_verified:false,id:''},
  }),
  methods:{
    handleCvUpload(event) {
      this.user.cv = event.target.files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
        this.user.cv = reader.result
      }
      reader.readAsDataURL(this.user.cv);
    },
    handleImageUpload(event) {
      this.user.image = event.target.files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
        this.user.image = reader.result
      }
      reader.readAsDataURL(this.user.image);
      // reader.onload = (event) => {
      //   let WIDTH = 800
      //   let image_url = event.target.result;
      //   let image = document.createElement('img');
      //   image.src = image_url;

      //   image.onload = (e) => {

      //       let canvas = document.createElement('canvas');
      //       let ratio = WIDTH / e.target.width;
      //       canvas.width = WIDTH;
      //       canvas.height = image.height * ratio;

      //       let context = canvas.getContext('2d');
      //       context.drawImage(image, 0, 0, canvas.width, canvas.height);

      //       let new_image_url = canvas.toDataURL('image/jpeg', 98)

      //       let image_file = document.createElement('img')
      //       image_file.src = new_image_url
      //   } 
      // }
    },
    async  handleSubmit() {
    try {
      await axios.put(`http://localhost:5000/students/${this.user.id}`, {
        course_of_study: this.user.course_of_study,
        address: this.user.address,
        university: this.user.university,
        dob: this.user.dob,
        cgpa: this.user.cgpa,
        email: this.user.email,
        cv: this.user.cv,
        image: this.user.image,
      });
      this.$router.push('/dashboard')
    } catch (error) {
      console.log(error)
    }  
  }
  },
  mounted(){
    
    const session = sessionStorage.getItem('session')
     console.log(session)
     
     const parsedSession = JSON.parse(session)
     this.user = parsedSession.student
     console.log(this.user)
  }
};
</script>
  
<style scope>
.container {
  font-family: "Lato", sans-serif;
  background-position: right -23.82% top -84.06%;
  padding-top: 100px;
  padding-bottom: 100px;
}

.header {
  width: 963px;
  margin: 0 auto;
}

.logo-con {
  height: 21px;
  margin: auto;
  margin-bottom: 69px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
  margin-top: 24px;
  font-style: italic;
}

.form-container {
  display: flex;
  flex-direction: column;
  padding: 0 61px;
}

.form-sub-container {
  display: flex;
  justify-content: space-between;
  /* gap: 73px; */
}

label {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
  display: inline-block;
  margin-bottom: 5px;
  margin-top: 22px;
}

input {
  padding: 18px 13px;
  width: 379px;
  border: 1.5px solid #bdbdbd;
  border-radius: 4px;
  font-family: "Lato", sans-serif;
  outline: none;
  font-size: 16px;
}

input:focus {
  border: 1.5px solid #2b3c4e;
}
.submitDiv{
  display: flex;
  justify-content: center;
}
.submit {
  width: 379px;
  height: 50px;
  background: #7557d3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 43px;
  font-weight: 700;
  font-size: 16px;
}


a {
  text-decoration-line: underline;
  color: #1a2c56;
}

.upload-buttons {
  padding: 14px 53px;
  background-color: white;
  border: 1.5px dashed #2b3c4e;
  border-radius: 2.87205px;
  font-family: "Lato", sans-serif;
  color: #2b3c4e;
  font-weight: 400;
  font-size: 16px;
}

.uploads-image{
  display: flex;
  flex-direction: column;
}

.uploads-image span{
  padding: 5px;
  background: antiquewhite;
  text-align: center;
}
button:hover {
  cursor: pointer;
}

.upload-img {
  margin-right: 13.97px;
}

.uploads {
  display: flex;
  justify-content: center;
  margin-top: 93.58px;
  margin-bottom: 32.03px;
  gap: 32px;
}

.uploads>button:first-child {
  margin-right: 32px;
}


</style>
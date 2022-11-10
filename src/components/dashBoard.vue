<template>
  <div class="dashBoard">
    <section class="dashTop">
      <div class="dashText">
        <h4>Ever had a Dream <br> of Becoming a Software <br>
        <span>Engineer?</span> </h4>
        <p> Join enyata academy today and bring your long <br> awaiting dream to reality.</p>
        <router-link to="/signup"><input type="submit" value="Register"/></router-link> 
        <div class="checkRegistration" v-if="show ===!show">
          <img src="../assets/dashboard/esclim.png" alt="">
          <p class="noRegister" style='color: rgba(255, 0, 0, 0.71)' >
            Registration not open
          </p>
        </div> 
         
      </div>
      <div class="dashImg">
        <img src="../assets/dashboard/dashboardimg.png" alt="">
      </div>
    </section> 
    <section class="dashBut" >
      <div class="dashButfirst" >
        <p></p>
        <h4>Why us?</h4>
      </div>
      <div class="dashArt">
        <article class="colored">
          <h4>Learn from the best</h4>
          <p>Amet minim mollit non deserunt <br> ullamco est sit aliqua dolor do <br> amet sint. Velit officia consequat <br> duis enim velit mollit. Exercitation <br> amet.</p>
        </article>
         <article>
          <h4>100% online classes </h4>
          <p>Amet minim mollit non deserunt <br> ullamco est sit aliqua dolor do <br> amet sint. Velit officia consequat <br> duis enim velit mollit. Exercitation <br> amet.</p>
        </article>
         <article class="colored">
          <h4>Get paid while learning </h4>
          <p>Amet minim mollit non deserunt <br> ullamco est sit aliqua dolor do <br> amet sint. Velit officia consequat <br> duis enim velit mollit. Exercitation <br> amet.</p>
        </article>
         <article>
          <h4>Work on real project</h4>
          <p>Amet minim mollit non deserunt <br> ullamco est sit aliqua dolor do <br> amet sint. Velit officia consequat <br> duis enim velit mollit. Exercitation <br> amet.</p>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'dashBoard',
  data: () => ({
    show: false,
    register: 0
  }),
  methods: {
   async gotoRegister(){
      try {
        const response = await axios.get('http://localhost:5000/batch');
        console.log(response)
        this.register = response.data.data.length
        console.log(this.register)
      } catch (error) {
        console.log(error)
      }
    },

    mounted() {
    
    }
      
    },
    created(){
      this.gotoRegister()
      if (this.register >0) {
        this.show = !this.show;
      } 
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dashTop{
    display: flex;
    justify-content:space-between;
    align-items: center;
  }

  .dashText{
    display: flex;
    flex-direction: column;
  }

  .dashText h4{
    font-weight: 700;
    font-size: 40px;
    line-height: 57px;
    letter-spacing: 0.035em;
    color: #211F26;
  }

  .dashText span{
    color: #7557D3;
  }

  .dashText p{
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.02em;
    color: rgba(33, 31, 38, 0.71);
  }

  .dashText input{
    background: #7557D3;
    border-radius: 2px;
    color: white;
    border: none;
    padding: 12px 24px;
    width: 152px;
    cursor: pointer;
  }

.dashButfirst{
  display: flex;
  align-items: center;
}

.dashButfirst p{
  border: solid 1px #FDC840;
  width: 34px;
  height: 0px;
  margin-right: 20px;
}

.dashButfirst h4{
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #211F26;
}

.dashArt{
  display: flex;
}

.dashArt article{
  padding: 24px;
  width: 100%;
}
.dashArt article h4{
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #211F26;
}
.dashArt article p{
  font-weight: 400;
  font-size: 14px;
  line-height: 156%;
  letter-spacing: 0.01em;
  color: rgba(33, 31, 38, 0.6);
}

.colored{
  background: rgba(117, 87, 211, 0.1);
}

.noRegister {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin-top: 20px;
  color: red;
}

.checkRegistration{
  display: flex;
  gap: 6px;
  align-items: center;
}

.checkRegistration img{
  height: 20px;
}

  @media (max-width: 720px){
    .dashImg img{
      display: none;
    }
    .dashArt{
      display: grid;
      /* grid-template-columns: auto auto; */
    }
    .dashArt article{
      padding: 2px;
      text-align: center;
    }
  }
</style>

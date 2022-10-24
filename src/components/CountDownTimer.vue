<template>
 
  <div>
    <div class="count"></div>
    <p>Timer</p>
    <div>{{displayTime}}</div>
  </div>

</template>

<script>
 export default {
 name: 'CountDownTimer',


   data: () => ({
     displayTime:0,
    Sec:1800,
   }),
  computed:{
    _seconds:() => 1000,
    _minutes(){
      return this._minutes + 60
    }
  },
  
 methods: {
  showRemaining(){
    const timer = setInterval(()=>{
      let min = Math.floor(sec / 60)
      let remSec = sec % 60;


      if (remSec < 10) {

        remSec = '0' + remSec;

      }
      if (min < 10) {

        min = '0' + min;

      }
    this.displayTime = min + ":" + remSec;

      if (sec > 0) {

        sec = sec - 1;

      } else {

        clearInterval(timer);
      }
    })
  }
}
} 

</script>

<style scoped>
   
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
</style>
<template>
<firstdashboard> </firstdashboard>
<seconddashform></seconddashform>
<anotherdashboard></anotherdashboard>
</template>

<script>
// @ is an alias to /src
// import DashBoard from '@/components/dashBoard.vue'
// import NavBar from '@/components/navBar';
// import Footer from "@/components/footer"

import firstdashboard from '@/components/firstdashboard.vue'
import seconddashform from '@/components/seconddashform'
import anotherdashboard from '@/components/anotherdashboard'


export default {
  name: 'HomeView',
  components: {
  firstdashboard,
  seconddashform,
  anotherdashboard,
    // DashBoard,
    // NavBar,
    // Footer
  }
}
</script>

<style>
.home{
  width: calc(100vw - 136px);
  margin-inline: auto;
}
</style>

<template>

<h1></h1>
   <div class="home"> 
     <NavBar/>  
   <DashBoard />  
   </div> 
   <Footer />   
</template>

<script>
// @ is an alias to /src
 import DashBoard from '@/components/dashBoard.vue'
 import NavBar from '@/components/navBar';
import Footer from "@/components/footer"
 
export default {
  props: {
  },
  name: 'HomeView',
  components: {
     DashBoard,
    NavBar,
    Footer,
   
}
}
</script>

<style>
.home {
  width: calc(100vw - 136px);
  margin-inline: auto;
}
</style>

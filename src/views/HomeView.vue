<template>
<!-- <firstdashboard> </firstdashboard>
<seconddashform></seconddashform> -->
<Assessment></Assessment>
<!-- <Questions></Questions>
<AssessmentCompleted></AssessmentCompleted> -->
</template>

<script>
// @ is an alias to /src
// import DashBoard from '@/components/dashBoard.vue'
// import NavBar from '@/components/navBar';
// import Footer from "@/components/footer"

// import firstdashboard from '@/components/firstdashboard.vue'
// import seconddashform from '@/components/seconddashform'
import Assessment from '@/components/Assessment.vue'
// import Questions from '@/components/Questions.vue'
// import AssessmentCompleted from '@/components/Assessment-completed.vue'


export default {
  name: 'HomeView',
  components: {
  // firstdashboard,
  // seconddashform,
  Assessment,
  // Questions,
  // AssessmentCompleted,
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

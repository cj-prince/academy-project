<template>
  <div class="home">
    <DashBoard />
  </div>
</template>

<script>
// @ is an alias to /src
import DashBoard from '@/components/dashBoard.vue'

export default {
  name: 'HomeView',
  components: {
    DashBoard
  }
}
</script>

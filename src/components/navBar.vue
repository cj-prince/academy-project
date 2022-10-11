<template>
  <div class="navBar">
    <div class="navImg" @click="$router.push('/')">
      <img src="../assets/dashboard/logo.png" alt="">
    </div>
    <div class="navText">
      <p> Home</p>
      <p>Sign in</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
  }

</script>

<style scoped>

.navBar{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navImg{
  margin-block: 72px;
  cursor: pointer;
}

.navText{
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-block: 56px;
  cursor: pointer;
  color: rgba(33, 31, 38, 0.71);
  line-height: 24px;
}

</style>
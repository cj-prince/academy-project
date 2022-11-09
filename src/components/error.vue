<template>
  <div class="error-div">
    {{error}}
  </div>
</template>

<script>
  export default {
    name:"Error-",
    props:['error'],
    data:()=> ({
      
    })
  }
</script>

<style scoped>
  .error-div{
    color: #ba3939;
    background: #ffe0e0;
    width: 367px;
    display: flex;
    padding: 10px;
    margin: auto;
    border-radius: 4px;
  }
</style>
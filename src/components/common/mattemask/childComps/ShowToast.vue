<template>
  <div class="toast-item">
    <span v-text="toastItem[0]"></span>
    <i :class="toastItem[1]"></i>
  </div>
</template>

<script>
  export default {
    name: "ShowToast",
    props:{
      toastItem:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .toast-item{
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: rgba(0,0,0,.5);
  }
</style>

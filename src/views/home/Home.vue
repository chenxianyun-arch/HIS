<template>
  <div id="home">
    <!--顶部导航组件-->
   <head-nav/>
    <!--侧边栏-->
   <Aside></Aside>
  </div>
</template>

<script>
  import HeadNav from "@/components/content/headnav/HeadNav"
  import Aside from "@/components/content/aside/Aside";
  export default {
    name: "Home",
    components:{
      HeadNav,
      Aside
    }
  }
</script>

<style scoped>

</style>

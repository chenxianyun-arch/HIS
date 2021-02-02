<template>
  <div class="head-nav">
    <div class="header-wrapper">
      <h1 class="title" title="互联网医疗服务后台管理">基于SpringBoot技术医院诊疗管理系统</h1>
      <div class="info">
        <div @click="adminClick">
          <i class="iconfont icon-yonghuming"></i>
          <span>admin</span>
        </div>
        <div @click="toindexClick">
         <i class="iconfont">&#xe61f;</i>
         <span>首页</span>
        </div>
        <div @click="logoutClick">
          <i class="iconfont">&#xe606;</i>
          <span>注销</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeadNav",
    data(){
      return{

      }
    },
    methods:{
      adminClick(){
        console.log('--');
      },
      toindexClick(){
        this.$router.replace('/home')
      },
      logoutClick(){
        this.showToast()

      },
      showToast(){
        this.$toast({text:'注销成功，请登录',type:'info',duration:1500})
        this.$router.replace('/login')
      }
    }
  }
</script>

<style scoped>
.header-wrapper{
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 0 10px;
  color: #ffffff;
  background-color: #108ee9;
}
.title{
  display: inline-block;
  font-size: 30px;
}
.info{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info div{
  display: inline-block;
  margin-right: 60px;
}
.info div .iconfont{
  display: block;
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: 17px;
}
.info div:hover{
  cursor: pointer;
}
</style>

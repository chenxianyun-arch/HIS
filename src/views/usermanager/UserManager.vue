<!--
@Desc: 用户管理的组件，用户管理的组件
@Date: 2020年10月8日23:38:41
@Author: chenxy
@Update: 2020年10月10日23:21:48
-->
<template>
 <!-- 用户管理主要内容 -->
 <div class="container">
   <!-- 主要内容-->
   <div class="main">
    <!-- 标题 -->
    <h2>用户管理</h2>
    <!-- 筛选列表 -->
    <div class="select-list">
      <div class="list-item">
        <i class="icon-select"><img src="../../assets/usermanager/menu.png" alt="分类图片"></i>
        <span class="item-info">筛选</span>
      </div>
      <div class="select-wrap">
        <!-- 中间的列表盒子 -->
        <div class="select-box">
          <div><input class="user-account" type="text" placeholder="请输入用户名和账号" /></div>
          <div><span>注册时间</span>&nbsp; <input type="date" /></div>
          <div><button>筛选</button></div>
        </div>
      </div>
    </div>

   </div>
 </div>
</template>

<script>

export default {
  name: "UserManager"
}

</script>

<style scoped>

.container {
 width: 100%;
 height: 100vh;
}

.container .main {
 padding: 10px;
 width: inherit;
 height: 100%;
 background-color: red;
}

.container .main .select-list{
  margin-top: 5px;
  width: 100%;
  height: 20%;
  background-color: yellow;
}

.container .main .select-list .list-item {
  height: 30px;
  line-height: 30px;
  background-color: #f2f2f2;
}

.container .main .select-list .list-item img {
  position: relative;
  left: 0;
  top: 16%;
  width: 20px;
  height: 20px;
}

.container .main .select-list .list-item .item-info {
  margin-left: 3px;
}

.container .main .select-list .select-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 76%;
}

.container .main .select-list .select-box {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  width: 100%;
}

.container .main .select-list .select-box .user-account {
  width: 200px;
}




</style>
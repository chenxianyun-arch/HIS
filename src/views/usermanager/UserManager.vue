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
          <div><span>注册时间</span>&nbsp; <input type="date" class="register-date"/></div>
          <div><button class="select-btn">筛选</button></div>
        </div>
      </div>
    </div>
    <!-- 用户列表 -->
    <div class="select-list select-user">
       <div class="list-item list-reset">
         <i class="icon-select icon-reset"><img src="../../assets/usermanager/menu.png" alt="分类图片"></i>
         <span class="item-info">用户列表</span>
         <div class="message"></div>
         <div class="qun-message"></div>
         <div class="app-message"></div>
       </div>
       <div class="list-box">
         <!-- 中间的列表盒子 -->
         <div class="select-box">
           <!-- 用户列表区域 -->
           <div class="table">
             <el-table
               ref="multipleTable"
               :data="tableData"
               tooltip-effect="dark"
               style="width: 100%"
               @selection-change="handleSelectionChange">
               <el-table-column
                 type="selection"
                 width="55">
               </el-table-column>
               <el-table-column
                 prop="name"
                 label="用户名"
                 width="180">
                 <template slot-scope="scope">
                   <el-popover trigger="hover" placement="top">
                     <p>用户名: {{ scope.row.name }}</p>
                     <p>电话: {{ scope.row.address }}</p>
                     <div slot="reference" class="name-wrapper">
                       <el-tag size="medium">{{ scope.row.name }}</el-tag>
                     </div>
                   </el-popover>
                 </template>
               </el-table-column>
               <el-table-column
                 width="140"
                 prop="phone"
                 label="电话">
               </el-table-column>
               <el-table-column
                 prop="address"
                 label="账号启用状态"
                 width="170">
                  <template slot-scope="scope">
                    <el-switch
                      style="display: block"
                      v-model="value1"
                      active-color="#13ce66"
                      active-text="开始"
                      inactive-text="关闭">
                    </el-switch>
                  </template>
               </el-table-column>
               <el-table-column
                 prop="time"
                 label="加入时间"
                 width="170">
               </el-table-column>
               <el-table-column
                 width=""
                 prop="address"
                 label="操作">
                 <template slot-scope="scope">
                   <div style="display: flex; justify-content: space-between; flex-wrap: nowrap;">
                     <el-button @click="handleClick(scope.row)" type="text" size="medium">查看档案</el-button>
                     <el-button type="text" size="medium">查看收货地址</el-button>
                     <el-button type="text" size="medium">删除</el-button>
                   </div>
                 </template>
               </el-table-column>
             </el-table>
           </div>
         </div>
         <!-- 底部的删除全部按钮和分页插件 -->
         <div class="page-plugin">
           <!-- 删除全部 -->
           <div class="deleteall" style="position: relative; right: 0; height: 50px;">
             <el-button style="float: right; margin-top: 10px;">删除全部</el-button>
           </div>
           <!-- 分页插件 -->
           <div style="display: flex; justify-content: center;">
             <el-pagination
               background
               @size-change="handleSizeChange"
               @current-change="handleCurrentChange"
               :current-page="currentPage"
               :page-sizes="[10, 20, 30, 100]"
               :page-size="pageSize"
               layout="total, sizes, prev, pager, next, jumper"
               :total="total">
             </el-pagination>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>

export default {
  name: "UserManager",
  data() {
    return {
      // 列表数据
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        time: '2020-7-21',
        phone: '18381911292',
        // 是否开启账号
        value: false
      }, {
        date: '2016-05-04',
        name: '王小虎',
        time: '2020-7-21',
        phone: '18381911292',
        // 是否开启账号
        value: false
      }, {
        date: '2016-05-01',
        name: '王小虎',
        time: '2020-7-21',
        phone: '18381911292',
        // 是否开启账号
        value: false
      }, {
        date: '2016-05-03',
        name: '王小虎',
        time: '2020-7-21',
        phone: '18381911292',
        // 是否开启账号
        value: false
      }],
      // 多选所要用到的数组
      multipleSelection: [], // 多选中后的数据是那些
      value1: true,   // switch 是否打开
      currentPage: 3, // 当前页码
      pageSize: 10,   // 每页大小
      total: 10000     // 总页数
    }
  },
  methods: {
    // 点击查看编辑
    handleClick(row) {
      console.log(row);
    },
    // 复选框选中之后和没有被选中时候发生变化
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log('111')
    }
  }
}

</script>

<style scoped>

.container {
 width: 100%;
 height: 100vh;
}

.container .main {
 overflow-x: hidden;
 padding: 10px;
 width: inherit;
 height: 100%;
}

.container .main .select-list{
  margin-top: 5px;
  width: 100%;
  height: 20%;
  border: 1px solid #dcdfe6;
}

.container .main .table{
  width: 100%;
}

.container .main .select-user {
  width: 100%;
  height: 80%;
}



.container .main .select-list .list-item {
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #dcdfe6;
  background-color: #f2f2f2;
}

.container .main .select-list .list-reset {
  height: 60px;
  line-height: 60px;
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
  padding: 8px 8px 8px 5px;
  border: 1px solid #dcdfe6;
  border-radius: 3px;
}

.container .main .select-list .select-box .register-date {
  padding: 8px 8px 8px 5px;
  border: 1px solid #dcdfe6;
  border-radius: 3px;
}

.container .main .select-list .select-box .select-btn {
  padding: 8px 15px 8px 15px;
  border-radius: 3px;
  color: #fff;
  background-color: #108ee9;
}

.container .main .select-list .select-box .select-btn:hover {
  cursor: pointer;
}

.container .main .select-list .icon-select img{
  top: 10%;
}





</style>
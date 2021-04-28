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
          <i class="icon-select">
            <img src="../../assets/usermanager/menu.png" alt="分类图片"/>
          </i>
          <span class="item-info">筛选</span>
        </div>
        <div class="select-wrap">
          <!-- 中间的列表盒子 -->
          <div class="select-box">
            <div>
              <el-input
                placeholder="请输入姓名/ID号"
                v-model="elInput"
                clearable
              >
              </el-input>
            </div>
            <div class="block">
              <span class="demonstration">选择时间</span>
              <el-date-picker
                v-model="value2"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </div>
            <!--           <div><span>注册时间</span>&nbsp; <input type="date" class="register-date"/></div>-->
            <div>
              <el-button type="primary" @click="btnClick">筛选</el-button>
            </div>
          </div>
        </div>
      </div>
      <!-- 用户列表 -->
      <div class="select-list select-user">
        <div class="list-item list-reset">
          <i class="icon-select icon-reset"
            ><img src="../../assets/usermanager/menu.png" alt="分类图片"
          /></i>
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
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column prop="name" label="用户名" width="180">
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
                <el-table-column width="140" prop="phone" label="电话">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="账号启用状态"
                  width="170"
                >
                  <template slot-scope="scope">
                    <el-switch
                      style="display: block"
                      v-model="scope.row.value"
                      active-color="#13ce66"
                      active-text="审核"
                      inactive-text="关闭"
                      @change="switchChange(scope.row)"
                    >
                    </el-switch>
                  </template>
                </el-table-column>
                <el-table-column prop="time" label="加入时间" width="170">
                </el-table-column>
                <el-table-column width="" prop="address" label="操作">
                  <template slot-scope="scope">
                    <div
                      style="
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: nowrap;
                      "
                    >
                      <el-button
                        @click="handleClick(scope.row)"
                        type="text"
                        size="medium"
                        >查看档案</el-button
                      >
                      <el-button @click="watchGoodsInfo" type="text" size="medium"
                        >查看收货地址</el-button>
                      <el-button
                        type="text"
                        size="medium"
                        @click="deletSingalClick(scope.row.userId)"
                        >删除</el-button
                      >
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <!-- 底部的删除全部按钮和分页插件 -->
          <div class="page-plugin">
            <!-- 删除全部 -->
            <div
              class="deleteall"
              style="position: relative; right: 0; height: 50px"
            >
              <el-button
                style="float: left; margin-top: 10px"
                @click="deletClick"
                >删除已选</el-button
              >
            </div>
            <!-- 分页插件 -->
            <div style="display: flex; justify-content: center">
              <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 15, 20, 25]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
              >
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入删除用户的删除信息接口
import {
  deleteAllUser,
  deletSingalUser,
  openOrClose,
  getOneUserInfo,
  getAllUserInfo
} from "@/network/user";

export default {
  name: "UserManager",
  data() {
    return {
      // 列表数据
      tableData: [
        {
          userId: 3,
          date: "2016-05-02",
          name: "李小明",
          time: "2020-7-21",
          phone: "18381911292",
          // 是否开启账号
          value: false,
        },
        {
          userId: 2,
          date: "2016-05-04",
          name: "王小虎",
          time: "2020-7-21",
          phone: "18381911292",
          // 是否开启账号
          value: false,
        },
        {
          userId: 6,
          date: "2016-05-01",
          name: "黄梅梅",
          time: "2020-7-21",
          phone: "18381911292",
          // 是否开启账号
          value: false,
        },
        {
          userId: 4,
          date: "2016-05-03",
          name: "王二丫",
          time: "2020-7-21",
          phone: "18381911292",
          // 是否开启账号
          value: true,
        },
      ],
      // 多选所要用到的数组
      multipleSelection: [], // 多选中后的数据是那些
      currentPage: 6, // 当前页码
      pageSize: 10, // 每页大小
      total: 10, // 总页数
      value2: "", // 获取筛选时间值
      elInput: "", // 获取关键值
    };
  },
  created() {
    // 1.用户数据请求，满足
    getAllUserInfo({
      currentPage: this.currentPage,
      pageSize: this.pageSize
    }).then(res => {
      console.log(res);
      this.tableData = res.data.userList;
      this.total = res.data.pageLength;
    }).catch(err => {
      console.log(err);
    })
  },
  methods: {
    // 点击查看编辑
    handleClick(row) {
      console.log(row);
      this.$router.push('/userdetailinfo');
    },
    // 复选框选中之后和没有被选中时候发生变化
    handleSelectionChange(val) {
      // 1 装选中的Id
      let selectId = [];
      // 2 循环添加对应的Id号
      for (let index = 0; index < val.length; index++) {
        selectId.push(val[index].userId);
      }
      // 3 将循环得到得Id值进行赋值
      this.multipleSelection = selectId;
      // console.log('111');
      console.log(this.multipleSelection);
      console.log(selectId);
    },
    // 点击按钮筛选数据
    btnClick() {
      // 将信息装入数组中，然后传给后端
      let keywords = {
       'keyName': this.elInput,
       'keyDate': Date.parse(this.value2)
      };
      console.log(keywords);
      // 请求数据API
      getOneUserInfo(keywords)
        .then((res) => {
          if(res.data[0] === null) {
            this.$toast({ text: "请稍等...", type: "info", duration: 2000 });
            setTimeout(() => {
              this.$toast({text: '信息为空!', type: 'danger', duration: 2000});
              this.tableData = [];
            },2000)
          }else{
            console.log(res.data);
            this.$toast({ text: "请稍等...", type: "info", duration: 2000 });
            setTimeout(() => {
              this.tableData = res.data;
              this.$toast({text: '查询成功!', type: 'info', duration: 2000});
            }, 2000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      // 2 在这里发起请求
      // 3 得到数据
      // 4 数据进行赋值
      // 5 前端进行展示数据
    },
    // switch开关单独开与关的状态触发
    switchChange(value) {
      console.log("----");
      console.log(value);
      openOrClose(value)
        .then((res) => {
          this.$message({
            message: "操作成功！",
            type: "success",
            duration: 4000,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 删除按钮弹出模态框提示删除全部吗
    deletClick() {
      this.$confirm(`确定要删除`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        console.log("点击确认");
        // 1 点击确定后发送需要删除的信息到后端
        deleteAllUser(this.multipleSelection)
          .then((res) => {
            this.$message({
              message: "删除成功！",
              type: "success",
              duration: 4000,
            });
            console.log(res);
          })
          .catch(() => {
            console.log("点击了取消");
            this.$message({
              message: "取消删除！",
              type: "info",
              duration: 4000,
            });
          });
      });
    },
    // 删除单个用户数据
    deletSingalClick(userId) {
      this.$confirm("确定要删除这条数据吗？", "删除数据", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 传递数据到后端
          deletSingalUser({
            deleteId: userId,
          })
            .then((data) => {
              console.log(data);
              this.$message({
                message: "删除成功！",
                type: "success",
                duration: 4000,
              })
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((err) => {
          // 打印错误信息
          console.log(err);
        });
    },
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange(size) {
      this.getSuccessInfo(size,this.currentPage);
      console.log(size); // 每页下拉显示数据
    },
    handleCurrentChange(currentPage) {
      console.log(currentPage); // 点击第几页
      this.getSuccessInfo(this.pageSize,currentPage);
    },
    getSuccessInfo(size,currentPage){
      console.log(currentPage);
      const data = {pageSize: size, currentPage: currentPage};
      getAllUserInfo(data).then(res => {
        console.log(res);
        this.tableData = res.data.userList;
        this.total = res.data.pageLength;
      }).catch(err => {
        console.log(err);
      })
    },
    watchGoodsInfo() {
      this.$router.push("/usergoodsinfo")
    }
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
}

.container .main {
  overflow-x: hidden;
  padding: 10px;
  margin-right: 20px;
  width: inherit;
  height: 100%;
}

.container .main .select-list {
  margin-top: 5px;
  width: 100%;
  height: 20%;
  border: 1px solid #dcdfe6;
}

.container .main .table {
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

.container .main .select-list .icon-select img {
  top: 10%;
  margin-left: 10px;
}
</style>
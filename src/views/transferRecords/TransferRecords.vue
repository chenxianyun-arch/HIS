<!--
@Desc: 医生列表组件，展示医生列表组件的一些信息
@Date: 2021年2月24日22:18:02
@Author: chenxy
@Update: 2021年2月24日22:18:10
-->

<template>
  <!-- 用户管理主要内容 -->
  <div class="container">
    <!-- 主要内容-->
    <div class="main">
      <!-- 标题 -->
      <h2>转账管理</h2>
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
            <!--  选择问诊方式 -->
            <div>
              <el-input
                placeholder="请输入姓名/ID号"
                v-model="elInput"
                clearable
              >
              </el-input>
            </div>
            <!-- 开始时间 -->
            <div class="block">
              <span class="demonstration">开始时间</span>
              <el-date-picker
                v-model="startDate"
                type="date"
                placeholder="开始时间"
              >
              </el-date-picker>
            </div>
            <!-- 结束时间 -->
            <div class="block">
              <span class="demonstration">结束时间</span>
              <el-date-picker
                v-model="endDate"
                type="date"
                placeholder="结束时间"
              >
              </el-date-picker>
            </div>
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
          <span class="item-info">医生列表</span>
          <div class="message"></div>
          <div class="qun-message"></div>
          <div class="app-message"></div>
        </div>
        <div class="list-box">
          <!-- 中间的列表盒子 -->
          <div class="select-box">
            <!-- 医生列表区域 -->
            <div class="table">
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="60"></el-table-column>
                <el-table-column prop="receivedName" label="接收者" width="150">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                      <p>用户名: {{ scope.row.receivedName }}</p>
                      <p>电话: {{ scope.row.receivedName }}</p>
                      <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.receivedName }}</el-tag>
                      </div>
                    </el-popover>
                    <!--                    receivedCard: "23314433"
                                            receivedDesc: "服务费"
                                            receivedId: 1
                                            receivedName: "钟南山"
                                            receivedPrice: 244
                                            receivedStartman: "李四"
                                            receivedState: "成功"
                                            receivedTime: "2021-03-25"-->
                  </template>
                </el-table-column>
                <el-table-column width="150" prop="receivedPrice" label="转账金额（税后）">
                </el-table-column>
                <el-table-column width="150" prop="receivedCard" label="银行卡号">
                </el-table-column>
                <el-table-column width="150" prop="receivedState" label="状态">
                </el-table-column>
                <el-table-column width="200" prop="receivedDesc" label="说明">
                </el-table-column>
                <el-table-column width="100" prop="receivedTime" label="转账时间">
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
              >删除已选
              </el-button>
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
  deleteAllDoctor,
  deletSingalDoctor,
  getOneDoctorInfo,
  getAllDoctorInfo
} from "@/network/received";

export default {
  name: "TransferRecords",
  data() {
    return {
// 列表数据
      tableData: [
        {
          receivedCard: "23314433",
          receivedDesc: "服务费",
          receivedId: 1,
          receivedName: "钟南山",
          receivedPrice: 244,
          receivedStartman: "李四",
          receivedState: "成功",
          receivedTime: "2021-03-25"
        }
      ],
// 多选所要用到的数组
      multipleSelection: [], // 多选中后的数据是那些
      currentPage: 1, // 当前页码
      pageSize: 10, // 每页大小
      total: 10, // 总页数
      startDate: "", // 开始时间
      endDate: "",   // 结束时间,
      elInput: ''
    };
  },
  created() {
// 1.用户数据请求，满足
    getAllDoctorInfo({
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
    },
// 复选框选中之后和没有被选中时候发生变化
    handleSelectionChange(val) {
      console.log(val);
// 1 装选中的Id
      let selectId = [];
// 2 循环添加对应的Id号
      for (let index = 0; index < val.length; index++) {
        selectId.push(val[index].questionnaireId);
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
        'startDate': Date.parse(this.startDate),
        'endDate': Date.parse(this.endDate)
      };
      console.log(keywords);
// 请求数据API
      getOneDoctorInfo(keywords)
        .then((res) => {
          if (res.data[0] === null) {
            this.$toast({text: "请稍等...", type: "info", duration: 2000});
            setTimeout(() => {
              this.$toast({text: '信息为空!', type: 'danger', duration: 2000});
              this.tableData = [];
            }, 2000)
          } else {
            console.log(res.data);
            this.$toast({text: "请稍等...", type: "info", duration: 2000});
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
        deleteAllDoctor(this.multipleSelection)
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
      console.log(userId);
      this.$confirm("确定要删除这条数据吗？", "删除数据", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
// 传递数据到后端
          deletSingalDoctor({
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
      this.getSuccessInfo(size, this.currentPage);
      console.log(size); // 每页下拉显示数据
    },
    handleCurrentChange(currentPage) {
      console.log(currentPage); // 点击第几页
      this.getSuccessInfo(this.pageSize, currentPage);
    },
    getSuccessInfo(size, currentPage) {
      console.log(currentPage);
      const data = {pageSize: size, currentPage: currentPage};
      getAllDoctorInfo(data).then(res => {
        console.log(res);
        this.tableData = res.data.userList;
        this.total = res.data.pageLength;
      }).catch(err => {
        console.log(err);
      })
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
<template>
  <div class="aside">
    <el-container style="height: 89.125vh; border: 1px solid #eee">
      <el-aside width="200px" style="border-right: 1px solid #b4bccc00; overflow: hidden;" class="el-aside">
        <el-menu :default-openeds="['1', '3']">
          <!-- 用户管理 -->
          <el-submenu index="1">
            <div slot="title" @click="userHandleClick"><i class="el-icon-message"></i>用户管理</div>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-message"></i>医生管理</template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="doctorListHandleClick()">医生列表</el-menu-item>
              <el-menu-item index="1-2" @click="doctorServiceHandleClick()">医生审核</el-menu-item>
              <el-menu-item index="1-2" @click="doctorServiceReviewClick()">服务审核</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <div slot="title" @click="prescriptHandleClick()"><i class="el-icon-message"></i>处方管理</div>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-setting"></i>订单管理</template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="ordsQuestionnaire()">问诊单管理</el-menu-item>
              <el-menu-item index="1-2" @click="ordsResgister()">挂号单管理</el-menu-item>
              <el-menu-item index="1-3" @click="ordsDrugs()">药品订单管理</el-menu-item>
              <el-menu-item index="1-4" @click="ordsPrescriptionReversal()">处方流转订单管理</el-menu-item>
              <el-menu-item index="1-5" @click="ordsRefund()">退款申请</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-setting"></i>财务管理</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="el-icon-setting"></i>商品管理</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title"><i class="el-icon-setting"></i>用户权限管理</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title"><i class="el-icon-setting"></i>意见管理</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <iframe :src="baseUrl+routerUrl" frameborder="0" width="100%" height="100%"></iframe>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Aside",
    data() {
      return {
        // 基本的地址
        baseUrl: 'http://localhost:8080/',
        // 填充进来的后面参数路由，默认是进入用户管理的列表
        routerUrl: 'usermanager'
      }
    },
    methods: {
      // 1 用户点击跳转到用户列表
      userHandleClick() {
        this.routerUrl = 'usermanager';
      },
      // 2 点击跳转到医生列表的列表
      doctorListHandleClick() {
        this.routerUrl = 'doctorlist';
        console.log(this.routerUrl);
      },
      // 3 点击跳转到医生服务
      doctorServiceHandleClick() {
        this.routerUrl = 'doctorservice'
      },
      // 4 点击跳转到医生服务审核
      doctorServiceReviewClick() {
        this.routerUrl = 'doctorservicereview'
      },
      // 5 点击跳转到处方管理
      prescriptHandleClick() {
        this.routerUrl = 'prescription'
      },
      // 6 点击跳转到问诊单
      ordsQuestionnaire() {
        this.routerUrl = 'questionnaire'
      },
      // 7 挂号单管理
      ordsResgister() {

      },
      // 8 药品订单管理
      ordsDrugs() {

      },
      // 9 处方流转订单管理
      ordsPrescriptionReversal() {

      },
      // 10 退款申请
      ordsRefund() {

      }
    }
  }
</script>

<style scoped>

</style>

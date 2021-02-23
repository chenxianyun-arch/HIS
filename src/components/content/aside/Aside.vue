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
              <el-menu-item index="3-1" @click="transactionRecord()">交易记录</el-menu-item>
              <el-menu-item index="3-2" @click="settlementRecord()">结算记录</el-menu-item>
              <el-menu-item index="3-3" @click="transferRecords()">转账记录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="el-icon-setting"></i>商品管理</template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="drugList()">药品列表</el-menu-item>
              <el-menu-item index="3-1" @click="drugclassification()">药品分类</el-menu-item>
              <el-menu-item index="3-1" @click="drugReview()">药品审核</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title"><i class="el-icon-setting"></i>用户权限管理</template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="memberManagment()">成员管理</el-menu-item>
              <el-menu-item index="3-2" @click="roleManagment()">角色管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title"><i class="el-icon-setting"></i>意见管理</template>
            <el-menu-item index="3-2" @click="suggestions()">意见管理</el-menu-item>
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
        this.routerUrl = 'doctorservice';
      },
      // 4 点击跳转到医生服务审核
      doctorServiceReviewClick() {
        this.routerUrl = 'doctorservicereview';
      },
      // 5 点击跳转到处方管理
      prescriptHandleClick() {
        this.routerUrl = 'prescription';
      },
      // 6 点击跳转到问诊单
      ordsQuestionnaire() {
        this.routerUrl = 'questionnaire';
      },
      // 7 挂号单管理
      ordsResgister() {
        this.routerUrl = 'registeredorder';
      },
      // 8 药品订单管理
      ordsDrugs() {
        this.routerUrl = 'drugordermanagement';
      },
      // 9 处方流转订单管理
      ordsPrescriptionReversal() {
        this.routerUrl = 'prescriptionCirculationOrderManagement';
      },
      // 10 退款申请
      ordsRefund() {
        this.routerUrl = 'refund';
      },
      // 1 交易记录
      transactionRecord() {
        this.routerUrl = 'transactionrecord';
      },
      // 2 交易记录
      settlementRecord() {
        this.routerUrl = 'settlementrecord';
      },
      // 3 转账记录
      transferRecords() {
        this.routerUrl = 'transferRecords';
      },
      // 1 药品列表管理
      drugList() {
        this.routerUrl = 'druglist';
      },
      // 2 药品分类管理
      drugclassification() {
        this.routerUrl = 'drugclassification';
      },
      // 3 药品审核管理
      drugReview() {
        this.routerUrl = 'drugReview';
      },
      // 1 成员管理
      memberManagment() {
        this.routerUrl = 'memberManagment';
      },
      // 2 成员管理
      roleManagment() {
        this.routerUrl = 'memberManagment';
      },
      // 意见管理
      suggestions() {
        this.routerUrl = 'suggestion'
      }
    }
  }
</script>

<style scoped>

</style>

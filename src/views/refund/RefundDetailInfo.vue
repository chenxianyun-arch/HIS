<!--
@time: 2021年4月29日17:45:16
@作者： chenxianyun
-->
<template>
  <div style="overflow-x: hidden">
    <div class="title">
      <h2>退款详情-待处理</h2>
      <el-button type="primary" @click="backBtn">返回</el-button>
    </div>
    <div class="user-detail" style="overflow-x: hidden;">
      <div style="margin: 0 auto">
        <div class="username" style="padding-left: 20px">订单信息</div>
        <div style="width: 100%; display: flex; justify-content: space-between">
          <div style="width: 100%">
            <div style="width: 100%; border: 1px solid #f2f2f2; padding: 17px;" >
              <p style="line-height: 20px">&nbsp;&nbsp;
                <span>服务编号：202145635124</span>&nbsp;&nbsp;
                <span>申请状态：已处理</span>&nbsp;&nbsp;
                <span>申请时间：2020-03-01</span>&nbsp;&nbsp;
                <span>用户名：183849567542</span>&nbsp;&nbsp;
              </p>
              <p style="line-height: 20px; margin-top: 20px">
                <span>订单编号：20201245</span>&nbsp;&nbsp;
                <span>订单金额：￥202</span>&nbsp;&nbsp;
                <span>实际退款金额：￥202</span>&nbsp;&nbsp;
              </p>
              <p style="line-height: 20px; margin-top: 20px">
                <span>退款方式：退回到员支付渠道</span>&nbsp;&nbsp;
                <span>退款类型： 取消订单</span>&nbsp;&nbsp;
                <span>退款方式： 退诊</span>&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="user-detail" style="overflow-x: hidden;">
      <div style="margin: 0 auto">
        <div class="username" style="padding-left: 20px">处理备注</div>
        <div style="width: 100%; ">
          <div style="width: 100%">
            <div style="display: flex; justify-content: center; width: 100%; border: 1px solid #f2f2f2; padding: 17px;" >
              <textarea placeholder="请输入建议" style="border: 2px solid #f2f2f2;" rows="10" cols="100"></textarea>
            </div>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between; margin: 0 auto; width: 300px;">
          <el-button class="el-button--primary" @click="confirmBtn">确认退款</el-button>
          <el-button class="el-button" @click="refuseRefund">拒绝退款</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "RefundDetailInfo",
  data() {
    return {

    }
  },
  methods: {
    backBtn() {
      this.$router.back();
    },
    // 确定退款
    confirmBtn() {
      this.showLoading();
      setTimeout(()=>{
        this.backBtn();
        this.succcessMsg();
      },2000);
    },
    // 拒绝退款
    refuseRefund() {
      this.showLoading();
      setTimeout(()=>{
        this.backBtn();
        this.failed();
      },2000);
    },
    showLoading() {
      const loading = this.$loading({
        lock: true,
        text: '加载中.....',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
    succcessMsg() {
      this.$message({
        message: '退款成功，请等待！',
        type: 'success'
      });
    },
    failed() {
      this.$message('拒绝退款成功！');
    }
  }
}
</script>

<style scoped>
.title {
  width: 70%;
  margin: 20px auto 0 auto;
  display: flex;
  justify-content: space-between;
}

table td {
  border: 1px solid #000;
  line-height: 50px;
}

.user-detail {
  margin: 0 auto;
  width: 70%;
}

.user-detail .first-line {
  background-color: #f2f2f2;
}

.user-detail .third-line {
  background-color: #f2f2f2;
}
.user-detail .username {
  width: 100%;
  background: #f2f2f2;
  line-height: 50px;
}

.left-info {
  width: 60%;
  height: 300px;
}

.right-info {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 300px;
}




</style>
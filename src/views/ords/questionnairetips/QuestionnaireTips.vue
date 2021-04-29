<!--
@time: 2021年4月29日15:02:32
@作者： chenxianyun
-->
<template>
  <div style="overflow-x: hidden">
    <div class="title">
      <h2>订单详情-待支付</h2>
      <el-button type="primary" @click="backBtn">返回</el-button>
    </div>
    <div class="user-detail" style="overflow-x: hidden;">
      <div style="margin: 0 auto">
        <div class="username" style="padding-left: 20px">患者信息</div>
        <div style="width: 100%; display: flex; justify-content: space-between">
          <div style="width: 100%">
            <div style="width: 100%; border: 1px solid #f2f2f2; padding: 17px;" >
              <p style="line-height: 20px">&nbsp;&nbsp;
                <span>患者姓名：田田</span>&nbsp;&nbsp;
                <span>性别：女</span>&nbsp;&nbsp;
                <span>年龄：43</span>&nbsp;&nbsp;
                <span>手机号：18381911292</span>&nbsp;&nbsp;
              </p>
              <p style="line-height: 20px; margin-top: 20px">
                <span>病情描述：高血压</span>&nbsp;&nbsp;
                <span>就诊情况：未去过医院就诊</span>&nbsp;&nbsp;
                <span>预约时间：2021-03-04 周一 18:00 - 22:00  提交时间：2020-03-04</span>&nbsp;&nbsp;
                <span>过敏史：无</span>&nbsp;&nbsp;
                <span>生育计划或状态</span>&nbsp;&nbsp;
              </p>
              <p style="line-height: 20px; margin-top: 20px">
                <<span>就诊情况：未去过医院就诊</span>&nbsp;&nbsp;
                <span>预约时间：2021-03-04 周一 18:00 - 22:00  提交时间：2020-03-04</span>&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="user-detail" style="overflow-x: hidden;">
      <div style="margin: 0 auto">
        <div class="username" style="padding-left: 20px">订单信息</div>
        <div style="width: 100%; display: flex; justify-content: space-between">
          <div style="width: 100%">
            <div style="width: 100%; border: 1px solid #f2f2f2; padding: 17px;" >
              <p style="line-height: 20px">&nbsp;&nbsp;
                <span>订单编号：20124520175</span>&nbsp;&nbsp;
                <span>订单类型：视频问诊</span>&nbsp;&nbsp;
                <span>状态：待支付</span>&nbsp;&nbsp;
              </p>
              <p style="line-height: 20px; margin-top: 20px">
                <span>应付金额：￥40</span>&nbsp;&nbsp;
                <span>优惠券：￥10</span>&nbsp;&nbsp;
                <span>实际支付：￥30</span>&nbsp;&nbsp;
              </p>
              <p style="line-height: 20px; margin-top: 20px">
                <<span>创建时间：2021年4月29日15:14:42</span>&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionnaireTips",
  data() {
    return {

    }
  },
  methods: {
    backBtn() {
      this.$router.back();
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
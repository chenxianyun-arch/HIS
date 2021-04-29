<!--
@time: 2021年4月29日15:26:44
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
        <div class="username" style="padding-left: 20px">挂号信息</div>
        <div style="width: 100%; display: flex; justify-content: space-between">
          <div style="width: 100%">
            <div style="width: 100%; border: 1px solid #f2f2f2; padding: 17px;" >
              <p style="line-height: 20px">&nbsp;&nbsp;
                <span>就诊时间：2021年4月29日15:32:11  下午</span>&nbsp;&nbsp;
                <span>就诊医院：北京协和医院</span>&nbsp;&nbsp;
                <span>科室：内科</span>&nbsp;&nbsp;
              </p>
              <p style="line-height: 20px; margin-top: 20px">
                <span>医生：杨明</span>&nbsp;&nbsp;
                <span>职称：主任医师</span>&nbsp;&nbsp;
                <span>医事服务费：50</span>&nbsp;&nbsp;
                <span>挂号单号：11542543625</span>&nbsp;&nbsp;
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
                <span>订单编号：2012451697</span>&nbsp;&nbsp;
                <span>状态：待支付</span>&nbsp;&nbsp;
              </p>
              <p style="line-height: 20px; margin-top: 20px">
                <span>应付金额：￥50</span>&nbsp;&nbsp;
                <span>优惠券：￥10</span>&nbsp;&nbsp;
                <span>实际支付：￥40</span>&nbsp;&nbsp;
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="user-detail" style="overflow-x: hidden;">
      <div style="margin: 0 auto">
        <div class="username" style="padding-left: 20px">就诊人信息</div>
        <div style="width: 100%; display: flex; justify-content: space-between">
          <div style="width: 100%">
            <div style="width: 100%; border: 1px solid #f2f2f2; padding: 17px;" >
              <p style="line-height: 20px; margin-top: 20px">
                <span>性别：男 </span>&nbsp;&nbsp;
                <span>姓名：张三 </span>&nbsp;&nbsp;
                <span>年龄：43 </span>&nbsp;&nbsp;
                <span>练习电话：18652453642 </span>&nbsp;&nbsp;
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
  name: "RegisterDetaillInfo",
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
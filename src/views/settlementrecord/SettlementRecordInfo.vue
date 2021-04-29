
<!--
@time: 2021年4月29日15:02:32
@作者： chenxianyun
-->
<template>
  <div style="overflow-x: hidden">
    <div class="title">
      <h2></h2>
      <el-button type="primary" @click="backBtn">返回</el-button>
    </div>
    <div class="user-detail" style="overflow-x: hidden;">
      <div style="margin: 0 auto">
        <div class="username" style="padding-left: 20px">收入来源</div>
        <div style="width: 100%; display: flex; justify-content: space-between">
          <div style="width: 100%">
            <div style="width: 100%; border: 1px solid #f2f2f2; padding: 17px;" >
              <p style="line-height: 20px">&nbsp;&nbsp;
                <span>患者姓名：田田</span>&nbsp;&nbsp;
                <span>时间：2021年4月29日21:12:21</span>&nbsp;&nbsp;
              </p>
              <p style="line-height: 20px; margin-top: 20px">
                <span>图文问诊：￥400</span>&nbsp;&nbsp;
                <span>订单数：20</span>&nbsp;&nbsp;
              </p>
              <p style="line-height: 20px; margin-top: 20px">
                <span>电话问诊：￥400</span>&nbsp;&nbsp;
                <span>订单数：20</span>&nbsp;&nbsp;
              </p>
              <p style="line-height: 20px; margin-top: 20px">
                <span>视频问诊：￥400</span>&nbsp;&nbsp;
                <span>订单数：10</span>&nbsp;&nbsp;
              </p>
              <p style="line-height: 20px; margin-top: 20px">
                <span>复诊开药：￥400</span>&nbsp;&nbsp;
                <span>订单数：100</span>&nbsp;&nbsp;
              </p>
              <p>总结：￥64000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettlementRecordInfo",
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
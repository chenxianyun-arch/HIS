<!--
@desc: 用户详情页面
@date：2021年4月28日16:55:22
-->

<template>
  <div>
    <div class="title">
      <h2>家庭档案</h2>
      <el-button type="primary" @click="backBtn">返回</el-button>
    </div>
    <div class="user-detail">
      <div style="margin: 0 auto">
        <div class="username">李四</div>
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td class="first-line">ID</td>
            <td>02</td>
            <td class="third-line">姓名</td>
            <td>王五</td>
          </tr>
          <tr>
            <td class="first-line">就诊人关系</td>
            <td>配偶</td>
            <td class="third-line">身份证号</td>
            <td>513002199805130152</td>
          </tr>
          <tr>
            <td class="first-line">社保卡</td>
            <td>410229184511221</td>
            <td class="third-line">性别</td>
            <td>男</td>
          </tr>
          <tr>
            <td class="first-line">出生年月</td>
            <td>1998-06-13</td>
            <td class="third-line">联系电话</td>
            <td>15528881375</td>
          </tr>
          <tr>
            <td class="first-line">所属地区</td>
            <td>成都市青羊区</td>
            <td class="third-line">加入时间</td>
            <td>2020-05-14 19:00</td>
          </tr>
        </table>
      </div>
      <div style="margin: 20px auto 20px auto">
        <div class="username">李四</div>
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td class="first-line">ID</td>
            <td>01</td>
            <td class="third-line">姓名</td>
            <td>李四</td>
          </tr>
          <tr>
            <td class="first-line">就诊人关系</td>
            <td>本人</td>
            <td class="third-line">身份证号</td>
            <td>513002199705130211</td>
          </tr>
          <tr>
            <td class="first-line">社保卡</td>
            <td>41022918867854</td>
            <td class="third-line">性别</td>
            <td>女</td>
          </tr>
          <tr>
            <td class="first-line">出生年月</td>
            <td>1997-05-13</td>
            <td class="third-line">联系电话</td>
            <td>18381911292</td>
          </tr>
          <tr>
            <td class="first-line">所属地区</td>
            <td>北京市朝阳区</td>
            <td class="third-line">加入时间</td>
            <td>2020-02-07 21:00</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDetailInfo",
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
</style>
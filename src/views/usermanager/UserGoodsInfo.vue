
<!--
@desc: 用户详情页面
@date：2021年4月28日22:41:20
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
            <td class="first-line">收货人</td>
            <td>李四</td>
            <td class="third-line">联系电话</td>
            <td>18812344521</td>
          </tr>
          <tr>
            <td class="first-line">详细地址</td>
            <td>北京市朝阳区石佛营路5号</td>
            <td class="third-line">是否为默认收货人</td>
            <td>否</td>
          </tr>
        </table>
      </div>
      <div style="margin: 20px auto 20px auto">
        <div class="username">李四</div>
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td class="first-line">收货人</td>
            <td>李四</td>
            <td class="third-line">联系电话</td>
            <td>18882451524</td>
          </tr>
          <tr>
            <td class="first-line">详细地址</td>
            <td>成都是青羊区清江南路11号</td>
            <td class="third-line">是否为默认收货人</td>
            <td>否</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserGoodsInfo",
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

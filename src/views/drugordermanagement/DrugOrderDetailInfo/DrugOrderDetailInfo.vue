<!--
@time: 2021年4月29日13:39:53
@作者： chenxianyun
-->

<template>
  <div style="overflow-x: hidden">
    <div style="position: relative; width: 300px; left: 43%;"><el-button type="button" @click="centerDialogVisible = true">订单发货</el-button></div>
    <div class="title">
      <h2>订单详情-待发货</h2>
      <el-button type="primary" @click="backBtn">返回</el-button>
    </div>
    <div class="user-detail" style="overflow-x: hidden;">
      <div style="margin: 0 auto">
        <div class="username" style="padding-left: 20px">订单信息</div>
        <div style="width: 100%; display: flex; justify-content: space-between">
          <div style="width: 100%">
            <div style="width: 100%; border: 1px solid #f2f2f2; padding: 30px 30px" >
              <p style="line-height: 20px">&nbsp;&nbsp;
                <span>订单编号：20222145236789</span>&nbsp;&nbsp;
                <span>订单金额：￥200</span>&nbsp;&nbsp;
                <span>状态：待发货</span>&nbsp;&nbsp;
              </p>
              <p style="line-height: 20px; margin-top: 20px">
                <span>提交时间：2020-03-04 11：08:18</span>&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style="margin: 20px auto 20px auto">
        <div class="username" style="padding-left: 20px">货物信息</div>
        <div style="padding: 30px 10px; border: 1px solid #f2f2f2;">
          <div style="width: 100%; display: flex; justify-content: space-between ">
            <div class="left-info">
              <div style="width: 100%; display: flex; justify-content: space-between ">
                <div style="width: 30%;height: 50%;">
                  <img width="100%" height="100%" src="http://cloud.axureshop.com/gsc/SOY55H/90/7b/9a/907b9a01ce1f49f0a29a8c9909478853/images/%E5%A4%84%E6%96%B9%E8%AF%A6%E6%83%85-%E5%AE%A1%E6%A0%B8%E4%B8%AD/u2849.png?token=d6fbda9d47628cb06880838dea9c38978d229cfbfbbe821bd7133782dd975e0a" alt="药品图片">
                </div>
                <div style="width: 70%; height: 50%;">
                  <p style="padding: 10px 0 10px 10px">苯磺酸氨氯地平片（络活喜）</p>
                  <p style="padding: 10px 0 10px 10px">规格：&nbsp;&nbsp; 5mg*7片/盒</p>
                  <p style="color: red; padding: 10px 0 10px 10px ">25￥</p>
                </div>
              </div>
              <div style="width: 100% ; display: flex; justify-content: space-between ">
                <div style="width: 30%;height: 50%; ">
                  <img width="100%" height="100%" src="http://cloud.axureshop.com/gsc/SOY55H/90/7b/9a/907b9a01ce1f49f0a29a8c9909478853/images/%E5%A4%84%E6%96%B9%E8%AF%A6%E6%83%85-%E5%AE%A1%E6%A0%B8%E4%B8%AD/u2849.png?token=d6fbda9d47628cb06880838dea9c38978d229cfbfbbe821bd7133782dd975e0a" alt="药品图片">
                </div>
                <div style="width: 70%; height: 50%;">
                  <p style="padding: 10px 0 10px 10px">苯磺酸氨氯地平片（络活喜）</p>
                  <p style="padding: 10px 0 10px 10px">规格：&nbsp;&nbsp; 5mg*7片/盒</p>
                  <p style="color: red; padding: 10px 0 10px 10px ">25￥</p>
                </div>
              </div>
            </div>
            <div class="right-info">
              <el-button type="parmary">查看原始处方</el-button>
            </div>
          </div>
        </div>
      </div>
      <div style="margin: 0 auto">
        <div class="username" style="padding-left: 20px">订单信息</div>
        <div style="width: 100%; display: flex; justify-content: space-between">
          <div style="width: 100%">
            <div style="width: 100%; border: 1px solid #f2f2f2; padding: 30px 30px" >
              <p style="line-height: 20px">&nbsp;&nbsp;
                <span>收货人：张三</span>&nbsp;&nbsp;
                <span>电话：18381911292</span>&nbsp;&nbsp;
              </p>
              <p style="line-height: 20px; margin-top: 20px">
                <span>收货人：成都市青羊区清江南街11号6楼</span>&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <el-dialog
        title="发货"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <div>
          <span>配送方式：</span><el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </div>
        <div style="margin-top: 20px">
          <span>物流单号：</span><el-input v-model="input" placeholder="请输入内容" style="width: 220px" aria-placeholder="请输入物流单号"></el-input>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "DrugOrderDetailInfo",
  data() {
    return {
      centerDialogVisible: false,
      options: [{
        value: '顺丰',
        label: '顺丰'
      }, {
        value: '圆通',
        label: '圆通'
      }, {
        value: '韵达',
        label: '韵达'
      }, {
        value: '中通',
        label: '中通'
      }, {
        value: '申通',
        label: '申通'
      }],
      value: '',
      input: ''
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
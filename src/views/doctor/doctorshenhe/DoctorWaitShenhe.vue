<!--
@desc: 医生详情-待审核
@date：2021年4月29日09:49:29
-->

<template>
  <div style="overflow-x: hidden;">
    <div style="position: relative; width: 300px; left: 43%;"><el-button type="button" @click="centerDialogVisible = true">审核</el-button></div>
    <div class="title">
      <h2>医生详情-待审核</h2>
      <el-button type="primary" @click="backBtn">返回</el-button>
    </div>
    <div class="user-detail" style="overflow-x: hidden;">
      <div style="margin: 0 auto">
        <div class="username" style="padding-left: 20px">基本信息</div>
        <div style="width: 100%; display: flex; justify-content: space-between">
          <div style="width: 20%;"><a href="#"><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.handannews.com.cn%2Fnews%2Fpic%2F2020-05%2F02%2Fc4409a7c-4fe6-4669-9b1d-24fb83f67c1f.jpg&refer=http%3A%2F%2Fwww.handannews.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622215518&t=582dd693ff97a08ff8228332ee290325" style="width: 100%; height: 100%" alt=""></a></div>
          <table width="80%" border="0" cellspacing="0" cellpadding="0">
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
      </div>
      <div style="margin: 20px auto 20px auto">
        <div class="username" style="padding-left: 20px">擅长</div>
        <div style="padding: 30px 10px; border: 1px solid #f2f2f2;">心绞痛，心肌梗塞，冠心病救治，冠心病介入治疗</div>
      </div>
      <div style="margin: 20px auto 20px auto">
        <div class="username" style="padding-left: 20px">简介</div>
        <div style="padding: 20px 40px; border: 1px solid #f2f2f2;">第四军医大学第一附属医院（西京医院）心血管内科，副教授，博士研究生导师。受邀参加2011年于德国林岛举行的第61届“诺贝尔奖获得者大会”，并做专题报告。先后赴美国约翰霍普金斯大学医学院心内科及美国加利福尼亚大学圣地亚哥分校从事访问学者研究工作，导师为2008年诺贝尔化学奖得主钱永健教授。获国际长城心血管会议优秀青年医师奖、中国介入心脏病学大会（CIT）青年医师研究奖、陕西省科学技术进步奖、陕西省青年科技新星、西安青年科技人才奖等多项奖励。享受军队优秀专业技术人才岗位津贴。在European heart journal等杂志发表SCI论文50余篇，单篇最高影响因子23.425，IF＞10论著3篇。为Journal of Pineal Research (IF=11.613)，Molecules (IF=3.098)杂志编委。EbioMedicine等37个SCI杂志审稿人，承担国家自然科学基金-优秀青年科学基金等4项国科金，承担国家重点研发计划子课题1项，国防科技创新特区生物及交叉科学技术领域青年创新课题1项，参与国家自然科学基金26项。国家自然科学基金同行评议专家</div>
      </div>
      <div style="margin: 20px auto 20px auto">
        <div class="username" style="padding-left: 20px">证书</div>
        <div style="display: flex; flex-wrap: wrap; justify-content: space-evenly; height: 450px; padding: 30px 10px; border: 1px solid #f2f2f2;">
          <img style="width: 200px; height: 200px"  src="https://upload-images.jianshu.io/upload_images/22769532-63a221359f8a9173.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="证书照片">
          <img style="width: 200px; height: 200px"  src="https://image.baidu.com/search/detail?ct=503316480&z=0&tn=baiduimagedetail&ipn=d&word=%E5%8C%BB%E7%96%97%E8%AF%81%E4%B9%A6&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=&latest=&copyright=&cs=708759728,2346340548&os=4020957545,1536289239&simid=56576794,780069761&pn=2&rn=1&di=97680&ln=1225&fr=&fmq=1619624994350_R&ic=&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fimage.pinganwj.com%252FclinicApproval%252FclinicPic%252F4%252F44996610-e866-49d6-9aac-370715809994%252Flicense%252FpracticingLicense95869317.jpg%253FresourceVersion%253D1463111612948%26refer%3Dhttp%253A%252F%252Fimage.pinganwj.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1622216993%26t%3Dcaac12b5f55e3d6fe59161d6cc21d8a8&rpstart=0&rpnum=0&adpicid=0&force=undefined" alt="证书照片">
          <img style="width: 200px; height: 200px"  src="https://image.baidu.com/search/detail?ct=503316480&z=0&tn=baiduimagedetail&ipn=d&word=%E5%8C%BB%E7%96%97%E8%AF%81%E4%B9%A6&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=&latest=&copyright=&cs=708759728,2346340548&os=4020957545,1536289239&simid=56576794,780069761&pn=2&rn=1&di=97680&ln=1225&fr=&fmq=1619624994350_R&ic=&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fimage.pinganwj.com%252FclinicApproval%252FclinicPic%252F4%252F44996610-e866-49d6-9aac-370715809994%252Flicense%252FpracticingLicense95869317.jpg%253FresourceVersion%253D1463111612948%26refer%3Dhttp%253A%252F%252Fimage.pinganwj.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1622216993%26t%3Dcaac12b5f55e3d6fe59161d6cc21d8a8&rpstart=0&rpnum=0&adpicid=0&force=undefined" alt="证书照片">
          <img style="width: 200px; height: 200px"  src="https://image.baidu.com/search/detail?ct=503316480&z=0&tn=baiduimagedetail&ipn=d&word=%E5%8C%BB%E7%96%97%E8%AF%81%E4%B9%A6&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=&latest=&copyright=&cs=708759728,2346340548&os=4020957545,1536289239&simid=56576794,780069761&pn=2&rn=1&di=97680&ln=1225&fr=&fmq=1619624994350_R&ic=&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fimage.pinganwj.com%252FclinicApproval%252FclinicPic%252F4%252F44996610-e866-49d6-9aac-370715809994%252Flicense%252FpracticingLicense95869317.jpg%253FresourceVersion%253D1463111612948%26refer%3Dhttp%253A%252F%252Fimage.pinganwj.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1622216993%26t%3Dcaac12b5f55e3d6fe59161d6cc21d8a8&rpstart=0&rpnum=0&adpicid=0&force=undefined" alt="证书照片">
          <img style="width: 200px; height: 200px"  src="https://image.baidu.com/search/detail?ct=503316480&z=0&tn=baiduimagedetail&ipn=d&word=%E5%8C%BB%E7%96%97%E8%AF%81%E4%B9%A6&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=&latest=&copyright=&cs=708759728,2346340548&os=4020957545,1536289239&simid=56576794,780069761&pn=2&rn=1&di=97680&ln=1225&fr=&fmq=1619624994350_R&ic=&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fimage.pinganwj.com%252FclinicApproval%252FclinicPic%252F4%252F44996610-e866-49d6-9aac-370715809994%252Flicense%252FpracticingLicense95869317.jpg%253FresourceVersion%253D1463111612948%26refer%3Dhttp%253A%252F%252Fimage.pinganwj.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1622216993%26t%3Dcaac12b5f55e3d6fe59161d6cc21d8a8&rpstart=0&rpnum=0&adpicid=0&force=undefined" alt="证书照片">
          <img style="width: 200px; height: 200px"  src="https://image.baidu.com/search/detail?ct=503316480&z=0&tn=baiduimagedetail&ipn=d&word=%E5%8C%BB%E7%96%97%E8%AF%81%E4%B9%A6&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=&latest=&copyright=&cs=708759728,2346340548&os=4020957545,1536289239&simid=56576794,780069761&pn=2&rn=1&di=97680&ln=1225&fr=&fmq=1619624994350_R&ic=&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fimage.pinganwj.com%252FclinicApproval%252FclinicPic%252F4%252F44996610-e866-49d6-9aac-370715809994%252Flicense%252FpracticingLicense95869317.jpg%253FresourceVersion%253D1463111612948%26refer%3Dhttp%253A%252F%252Fimage.pinganwj.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1622216993%26t%3Dcaac12b5f55e3d6fe59161d6cc21d8a8&rpstart=0&rpnum=0&adpicid=0&force=undefined" alt="证书照片">
        </div>
      </div>
    </div>
    <div>
      <el-dialog
        title="医生审核"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <p style="line-height: 30px">医生姓名: <span style="margin-left: 20px;">张三</span></p>
        <div style="line-height: 30px">
          <span style="margin-right: 20px">审核:</span>
          <el-radio v-model="radio" label="1">审核通过</el-radio>
          <el-radio v-model="radio" label="0">审核不通过</el-radio>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: 10px">
          <span style="margin-right: 20px">备注</span><textarea style="border: 1px solid #000"  placeholder="请输入审核不通过的建议" cols="45" rows="10"></textarea>
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
  name: "DoctorWaitShenhe",
  data() {
    return {
      centerDialogVisible: false,
      radio: '1'
    };
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
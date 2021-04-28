<!--
@date: 2021年4月28日12:22:59
@creater: chenxianyun
@desc: 注册账号

-->
<template>
  <div id="login">
    <div class="login-wrap">
      <!--顶部图片-->
      <div class="topimg">
        <img src="../../assets/login/topimg.png" alt="爱心标记">
        <!--        <img src="assets/login/topimg.png" alt="爱心标记">-->
      </div>
      <!--中间显示的具体内容-->
      <div class="login-container">
        <div class="main">
          <div class="left">
            <img src="../../assets/login/loginimg.svg" alt="">
          </div>
          <div class="right">
            <div class="warp">
              <h1 class="title">注册账号</h1>
              <div class="form-table">
                <form>
                  <div class="username">
                    <el-select v-model="value" placeholder="请选择角色(医生/用户)" style="width: 75%;">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                  <div class="password">
                    <i class="iconfont icon-yonghuming"></i>
                    <input type="text" v-model="form.username" id="username" placeholder="请输入用户名">
                  </div>
                  <div class="password">
                    <i class="iconfont icon-mimalan"></i>
                    <input type="password" v-model="form.password" id="password" placeholder="请输入密码">
                  </div>
                  <div class="password">
                    <i class="iconfont icon-mimalan"></i>
                    <input type="password" v-model="form.checkPwd" id="checkPwd" placeholder="请再次输入密码">
                  </div>
                  <div class="submit">
                    <label for="login"></label>
                    <input type="button" name="login" @click="loginClick" value="注册" >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <matte-mask v-bind:show-mask="{msg: '请稍后',showMsg: showToast,loadstyle: 'el-icon-loading'}"/>
    </div>
  </div>
</template>

<script>
// 有关组件相关的
import MatteMask from "@/components/common/mattemask/MatteMask";
// 有关函数相关的
import registerCheck from "@/network/register"
export default {
  name: "Register",
  components:{
    MatteMask
  },
  data(){
    return {
      form:{
        username: '',
        password: '',
        checkPwd: ''
      },
      showToast: false,//是否显示遮罩层
      checked: false,
      selectRole: 1, //选择角色
      options: [{
        value: '医生',
        label: '医生'
      }, {
        value: '用户',
        label: '用户'
      }, {
        value: '管理员',
        label: '管理员'
      }],
      value: ''
    }
  },
  methods:{
    loginClick() {
      //开启蒙版
      this.showToast = true
      //1.验证用户信息是否正确，实现登录验证
      registerCheck({username: this.form.username, password: this.form.checkPwd, role: this.value})
        .then(res => {
            this.setTimeOut1()
        })
        .catch(error => {
          console.log(error)
          this.setTimeOut2()
        })
    },
    setTimeOut1() {
      setTimeout(() => {
        this.showToast = false;
        this.$router.push('/login');
        this.$toast({text: "注册成功，请登录",type: "info", duration: 3000});
      },1500);
    },
    setTimeOut2(){
      this.showToast = false;
      this.$toast({text: "网络出现了故障",type: "danger", duration: 2000});
    }
  }
}
</script>

<style scoped>
/*整体flex结束*/
.login-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 1200px;
  height: 100vh;
  background-color: #666ee8;
}

.login-wrap form {
  width: 100%;
}

.login-wrap .username input {
  width: 100%;
}

.login-wrap .login-container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 80%;
  height: 80%;
  border-radius: 10px;
  background-color: #fff;
}
/*整体flex布局结束*/

/*左上部分心的布局开始*/
.topimg {
  position: fixed;
  left: 50px;
  top: 50px;
  width: 60px;
  height: 60px;
  z-index: 999;
}

.topimg img {
  display: inline-block;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 30px;
}
/*左上部分心的布局结束*/

/*中间内容部分布局开始*/
.main {
  width: 100%;
  padding: 70px 50px;
}

.main .select-item {
  width: 75%;
  display: flex;
  justify-content: space-between;
}

.left {
  width: 60%;
  height: 100%;
}

.left img {
  width: 100%;
  height: 100%;
}

.right {
  position: relative;
  width: 40%;
  height: 100%;
}

.right .warp {
  position: absolute;
  width: 90%;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.right .title {
  font-size: 30px;
  font-weight: 700;
}

.right .form-table div {
  margin-top: 10px;
}

.right .form-table div input {
  width: 75%;
  padding: 14px 30px 14px 50px;
  margin: inherit;
  border: 1px solid #d8dce5;
  border-radius: 10px;
  background-color: #ffffff;
}

.right .form-table .submit input {
  width: 75%;
  outline-style: none;
  padding: 14px;
  border-radius: 24px;
  background-color: #666ee8;
  color: #ffffff;
  cursor: pointer;
}

/*设置样式icon开始*/
.username, .password {
  position: relative;
}

#username:focus {
  border-color: #409EFF;
  outline: 0
}

#username:focus {
  border-color: #409EFF;
  outline: 0
}

#password:focus {
  border-color: #409EFF;
  outline: 0
}

#password:focus {
  border-color: #409EFF;
  outline: 0
}

#checkPwd:focus {
  border-color: #409EFF;
  outline: 0
}

#checkPwd:focus {
  border-color: #409EFF;
  outline: 0
}


.iconfont {
  position: absolute;
  left: 10px;
  top: 15px;
  font-size: 30px;
  color: #666ee8;
}
/*设置样式icon结束*/

/*  中间内容部分布局结束*/
</style>




<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">商务厅后台管理系统</div>
            <el-form :model="loginForm" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="loginName">
                    <el-input v-model="loginForm.loginName" placeholder="用户名" prefix-icon="el-icon-user">
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="密码"
                        v-model="loginForm.password"
                        @keyup.enter.native="submitForm()"
                        prefix-icon="el-icon-lock"
                    >
                    </el-input>
                </el-form-item>
                <el-form-item prop="captcha">
                    <el-input
                        style="width: 250px;margin-right: 10px"
                        placeholder="验证码"
                        v-model="loginForm.captcha"
                        @keyup.enter.native="submitForm()" prefix-icon="el-icon-lock">
                    </el-input>
                    <el-button type="text" @click="handleClick">换一张</el-button>
                    <img :src="imgUrl"
                         class="captcha"
                         @click="handleClick"
                         alt="加载失败">
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
                <!--<p class="login-tips">Tips : 用户名和密码随便填。</p>-->
            </el-form>
        </div>
    </div>
</template>

<script>
  import Utils from '@/utils/utils';
  import { setCookie } from '@/utils/auth';

  export default {
    data: function () {
      return {
        imgSrc: require('../../assets/img/login.jpg'),
        loginForm: {
          loginName: '',
          password: '',
          captcha: '',
        },
        rules: {
          loginName: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }],
          captcha: [{
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          }],
        },
        imgUrl: null,
        token: null,
      };
    },
    created() {
      this.getVerifyCode();
    },
    methods: {
      getVerifyCode() {
        this.$http.getVerifyCode()
          .then(res => {
            if (res.success) {
              const data = res.data[0];
              this.token = data.token;
              localStorage.setItem('loginToken', data.token);
              this.imgUrl = 'data:image/jpg;base64,' + data.data;
            }
          })
          .catch((err) => {
            console.error(err);
          });
      },
      submitForm() {
        this.$refs.login.validate(valid => {
          if (valid) {
            this.login();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleClick() {
        this.getVerifyCode();
      },
      login() {
        this.$http.login({
          loginName: this.loginForm.loginName.replace(/\s+/g, ''),
          password: Utils.encrypt(
            this.loginForm.password.replace(/\s+/g, '')
          ),
          captcha: this.loginForm.captcha.replace(/\s+/g, ''),
        })
          .then(res => {
            if (res.success) {
              const data = res.data[0];
              setCookie('token', data.userAccessToken,4);
              this.$store.dispatch('GetUserInfo', JSON.stringify(data));
              localStorage.removeItem('loginToken');
              this.$message.success('登录成功');
              this.$router.push('/');
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
  };
</script>

<style scoped>
    .login-wrap {
        position: relative;
        width: 100%;
        height: 100vh;
        background: url(../../assets/img/login-bg.jpg) no-repeat fixed bottom center / cover;
        background-size: 100% 100%;
    }

    .ms-title {
        width: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        border-bottom: 1px solid #ddd;
    }

    .ms-login {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 450px;
        margin: -190px 0 0 -225px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 1);
        overflow: hidden;
    }

    .ms-content {
        padding: 30px 30px;
    }

    .login-btn {
        text-align: center;
    }

    .login-btn button {
        width: 100%;
        height: 36px;
        margin-bottom: 10px;
    }

    .captcha {
        cursor: pointer;
        padding-top: 5px;
        padding-left: 10px;
    }

    .login-tips {
        font-size: 12px;
        line-height: 30px;
        color: #fff;
    }
</style>

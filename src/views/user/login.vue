<template>
  <div>
    <div id="app">
      <div>

        <!---->
        <div class="web-login">
          <div class="logo"><img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png"></div>
          <div class="login-form">
            <div>
              <form>
                <div class="form-group"><input type="tel" maxlength="13" placeholder="手机号" class="input-control"
                    v-model="telcode">
                  <div style="display: none;">
                    <div class="clear-mobile-btn"><i class="iconfont icon-chongzhi-qingchu "
                        style="position: absolute; right: 90px; line-height: 40px; font-size: 23px; color: rgb(189, 192, 197);"></i>
                    </div>
                  </div>
                  <div @click="sendcode()" class="getSmsCode sms-code disable"
                    style="position: absolute; right: 0px; top: 13px;">
                    获取验证码
                  </div>
                </div>
                <div class="errorTip" v-show="errdata">{{errdata}}</div>
                <div class="errorTip" v-show="errcode">{{errcode}}</div>
                <!---->

                <div class="form-group"><input placeholder="验证码" class="input-control" v-model="code"></div>
                <!---->
                <!---->
                <div class="submit login-btn" @click="loginuser"><span>登录</span></div>
              </form>
              <!---->
            </div>
          </div>
        </div>
        <!---->
        <div class="vc-alert" style="display: none;">
          <div class="vc-alert-layer"></div>
          <div class="vc-alert-wrap">
            <div class="vc-alert-title" style="display: none;"></div>
            <div class="vc-alert-content"></div>
            <div class="vc-alert-ok">好</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#app {
  font-size: 0.4rem;
  img {
    width: 60px;
    height: 60px;
  }
  div {
    box-sizing: border-box;
  }

  .logo {
    margin: 1.58rem auto 0.8rem;
    text-align: center;
    height: 1.2rem;
    line-height: 1.2rem;
  }

  .login-form {
    width: 100%;
    position: relative;

    .errorTip {
      text-align: left;
      color: #ff5f16;
      width: 100%;
      line-height: 11px;
      margin-left: 25px;
      font-size: 11px;
      margin-top: 7px;
    }

    .form-group {
      line-height: 55px;
      margin: 0 25px;
      position: relative;
      .input-control {
        height: 15px;
        line-height: 15px;
        padding: 20px 0;
        width: 100%;
        font-size: 15px;
        color: #191a1b;
        border: 0;
        outline-width: 0;
      }
      .getSmsCode {
        font-size: 13px;
        line-height: 30px;
        position: absolute;
        top: 25px;
        right: 0;
        color: #bdc0c5;
      }
    }

    .login-btn {
      margin-top: 70px;
    }

    .submit {
      line-height: 45px;
      font-size: 16px;
      margin: 70px 25px 0;
      border-radius: 3px;
      text-align: center;
      background-color: #ff5f16;
      height: 44px;
      color: #fff;
      border: none;

      .web-login .login-form .submit span {
        opacity: 0.3;
      }
    }
  }
}
</style>

<script>
// import { getcode, logincode } from '@/api/login'
// import Cookies from 'js-cookie'
// import { mapMutations } from 'vuex'
// export default {
//   data () {
//     return {
//       telcode: '',
//       code: '',
//       errdata: '',
//       errcode: ''

//     }
//   },
//   methods: {
//     ...mapMutations(['settoken']),
//     //验证码
//     sendcode () {

//       let num = Number(this.telcode)
//       getcode({ tel: num }).then(res => {
//         console.log(this.$toast);
//         console.log(res);
//         if (res.status == 0) {
//           this.errcode = ''
//           //弹出框
//           const toast = this.$toast.loading({
//             duration: 0,       // 持续展示 toast
//             forbidClick: true, // 禁用背景点击
//             loadingType: 'spinner',
//             message: '验证码发送成功'
//           });

//           let second = 1;

//           const timer = setInterval(() => {
//             second--;
//             if (second) {
//               this.$toast.message = `倒计时 ${second} 秒`;
//             } else {
//               clearInterval(timer);
//               this.$toast.clear();
//             }
//           }, 1000);
//           //---------------
//         }
//         else {
//           this.errcode = res.msg
//         }
//       })
//     },
//     //登录
//     loginuser () {
//       let _this = this
//       let codenum = this.code
//       let telnum = Number(this.telcode)
//       console.log(codenum);
//       logincode({ tel: telnum, code: codenum }).then(res => {
//         console.log(res);
//         if (res.status == 0) {
//           Cookies.set('token', res.data.token, { expires: 7, path: '' })
//           this.settoken(res.data.token)
//           this.errdata = ''
//           _this.$router.push("/center")
//         }
//         else {
//           console.log(res.msg);
//           this.errdata = res.msg
//         }

//       })
//     },

//   },
// }
</script>
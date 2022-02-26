<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h1 class="login_logo">美团外卖</h1>
        <div class="login_header_title">
          <a href="javascript:;" class="on">短信登录</a>
          <a href="javascript:;">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div class="on duanxin">
            <section class="login_message">
              <input type="telephone" maxlength="11" placeholder="手机号" />
              <button disabled="disabled" class="get_verifcation">获取验证码</button>
            </section>
            <section class="login_verifcation">
              <input type="telephone" maxlength="8" placeholder="验证码" />
            </section>
            <section class="login_hint">
              温馨提示：未注册美团外卖账号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div class="mima">
            <section class="login_message">
              <input type="telephone" maxlength="11" placeholder="手机/邮箱/用户名" />
            </section>
            <section class="login_verifcation">
              <input type="telephone" maxlength="8" placeholder="密码" />
              <mt-switch v-model="value"></mt-switch>
            </section>
            <section class="login_message">
              <input type="text" maxlength="11" placeholder="验证码" />
              <img src="../Login/images/captcha.png" alt="" class="get_verifcation1" />
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <div class="about_us">
          <a href="javascript:;">关于我们</a>
        </div>
      </div>
      <a href="javascript:;" class="go_back" @click="$router.back()">
        <i class="iconfont icon-left"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      value: false
    }
  }
}
</script>

<style lang="less" scoped>
.loginContainer {
  .loginInner {
    position: relative;
    .login_header {
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .login_logo {
        color: #ffcc33;
        font-size: 35px;
      }
      .login_header_title {
        margin-top: 20px;
        font-weight: 600;
        a {
          padding-bottom: 3px;
          margin: 0 12px;
          color: #555;
        }
        .on {
          color: #ffcc33;
          border-bottom: 2px solid #ffcc33;
        }
      }
    }
    .login_content {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .duanxin {
          display: flex;
          display: none;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          input {
            flex-direction: column;
            border: 2px solid #eee;
            height: 35px;
            font-weight: 600;
            text-indent: 5px;
            font-size: 12px;
            width: 280px;
            margin-bottom: 15px;
            border-radius: 4px;
          }
          input::placeholder {
            color: #aaa;
          }
          .login_message {
            position: relative;
            .get_verifcation {
              position: absolute;
              top: 13px;
              right: 13px;
              font-size: 12px;
              font-weight: 600;
              background-color: #fff;
            }
          }
          .login_hint {
            width: 280px;
            font-size: 13px;
            color: #bbb;
            font-weight: 600;
            a {
              color: #ffcc33;
            }
          }
        }
        .mima {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          input {
            flex-direction: column;
            border: 2px solid #eee;
            height: 35px;
            font-weight: 600;
            text-indent: 5px;
            font-size: 12px;
            width: 280px;
            margin-bottom: 15px;
            border-radius: 4px;
          }
          input::placeholder {
            color: #aaa;
          }
          .login_message {
            position: relative;
            .get_verifcation1 {
              display: block;
              position: absolute;
              top: 10px;
              right: 12px;
              width: 60px;
              height: 20px;
              background-color: #fff;
            }
          }
          .login_verifcation {
            position: relative;
            .mint-switch {
              position: absolute;
              top: 9px;
              right: 10px;
              /deep/ .mint-switch-core {
                width: 40px;
                height: 22px;
              }
              /deep/ .mint-switch-core:before {
                width: 38px;
                height: 20px;
              }
              /deep/ .mint-switch-core:after {
                width: 19px;
                height: 19px;
              }
            }
          }
          .login_hint {
            width: 280px;
            font-size: 13px;
            color: #bbb;
            font-weight: 600;
            a {
              color: #ffcc33;
            }
          }
        }
        .login_submit {
          margin-top: 20px;
          width: 280px;
          background-color: #ffcc33;
          color: #fff;
          height: 35px;
          font-weight: 500;
          border-radius: 4px;
        }
      }
      .about_us {
        margin-top: 20px;
        a {
          font-size: 8px;
          color: #ccc;
          font-weight: 600;
        }
      }
    }
    .go_back {
      position: absolute;
      top: -45px;
      left: 0;
      .icon-left {
        color: #aaa;
        font-size: 25px;
      }
    }
  }
}
</style>

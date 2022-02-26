<template>
  <div class="my">
    <div class="header">
      <header-top>我的</header-top>
      <div class="login">
        <router-link to="/login" class="profile-link">
          <div class="login_img"><i class="iconfont icon-profile"></i></div>
          <div class="login_content">
            <div class="content_login">
              <div class="login1">登录/注册</div>
              <div class="login2">
                <i class="iconfont icon-phoneiphone"></i>
                暂无绑定手机号
              </div>
            </div>
            <i class="iconfont icon-right"></i>
          </div>
        </router-link>
      </div>
    </div>
    <div class="content">
      <ul class="items">
        <li class="order">
          <div class="word">
            <i class="iconfont icon-order"></i>
            我的订单
          </div>
          <i class="iconfont icon-right"></i>
        </li>
        <li class="order">
          <div class="word">
            <i class="iconfont icon-home1"></i>
            收货地址管理
          </div>
          <i class="iconfont icon-right"></i>
        </li>
        <li class="order">
          <div class="word">
            <i class="iconfont icon-integral1"></i>
            积分商城
          </div>
          <i class="iconfont icon-right"></i>
        </li>
        <li class="order">
          <div class="word">
            <i class="iconfont icon-vip1"></i>
            美团外卖会员卡
          </div>
          <i class="iconfont icon-right"></i>
        </li>
        <li class="order" style="border-bottom: none">
          <div class="word">
            <i class="iconfont icon-uf_houses"></i>
            服务中心
          </div>
          <i class="iconfont icon-right"></i>
        </li>
      </ul>
      <p class="tel">客服电话：&nbsp;101-097-77</p>
      <p class="time">服务时间：&nbsp;9:00-23:00</p>
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
export default {
  name: 'Profile',
  components: {
    HeaderTop
  }
}
</script>

<style lang="less" scoped>
.my .header {
  width: 100%;
  background-color: #ffcc33;
  background-size: cover;
  overflow: hidden;
  .title {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    border-bottom: 2px solid #eee;
  }
  .login {
    height: 80px;
    .profile-link {
      display: flex;
      justify-content: space-around;
      .login_img {
        width: 60px;
        height: 60px;
        background-color: #eee;
        border-radius: 30px;
        margin-top: 10px;
        margin-left: 10px;
        .icon-profile {
          display: flex;
          justify-content: center;
          margin-top: 7px;
          font-size: 40px;
          color: #555;
        }
      }
      .login_content {
        width: 290px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        .login1 {
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 7px;
        }
        .login2 {
          font-size: 12px;
          font-weight: 600;
        }
        .icon-right {
          font-size: 20px;
        }
      }
    }
  }
}

.my .content {
  min-height: 20px;
  background-color: #eee;
  .items {
    background-color: #fff;
    .order {
      height: 40px;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 5px 0 10px;
      border-bottom: 2px solid #eee;
      .word {
        font-weight: 600;
        .icon-order {
          color: #ffcc33;
        }
        .icon-home1 {
          color: #ffcc33;
        }
        .icon-integral1 {
          color: #ff6c37;
        }
        .icon-vip1 {
          color: #ffcc33;
        }
        .icon-uf_houses {
          color: #ff6c37;
        }
      }
      .icon-right {
        color: #ccc;
      }
    }
  }
  .tel {
    margin-top: 10px;
    font-size: 16px;
    color: #ffb000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    font-weight: 600;
    background-color: #fff;
  }
  .time {
    font-size: 14px;
    color: #999;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    background-color: #eee;
    height: 270px;
    font-weight: 600;
  }
}
</style>

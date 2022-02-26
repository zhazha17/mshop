<template>
  <div>
    <header-top>订单列表</header-top>
    <div class="order">
      <div class="order_img"><img src="../MSite/images/nav/1.png" alt="" /></div>
      <div class="order_remind">登录后查看外卖订单</div>
      <div class="order_login">
        <a><button>立即登录</button></a>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
export default {
  name: 'Order',
  components: {
    HeaderTop
  }
}
</script>

<style lang="less" scoped>
.title {
  background-color: #ffcc33;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
}
.order {
  margin-top: 150px;
  .order_img {
    display: flex;
    position: relative;
    width: 150px;
    height: 150px;
    padding-left: 110px;
    img {
      width: 150px;
      height: 150px;
    }
  }
  .order_remind {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    color: #333;
  }
  .order_login {
    height: 50px;
    padding-left: 150px;
    margin-top: 5px;
    a {
      button {
        width: 75px;
        height: 28px;
        background-color: #ffcc33;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
      }
    }
  }
}
</style>

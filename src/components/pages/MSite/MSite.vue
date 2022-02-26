<template>
  <section class="msite">
    <!-- 首页头部 -->
    <header class="msite_header">
      <div class="header_location">
        <div class="header_location1">
          <i class="iconfont icon-location"></i>
          <span>兆阳广场购物中心</span>
          <i class="iconfont icon-right"></i>
        </div>
        <div class="header_location2"></div>
      </div>
      <div class="header_search" action="#">
        <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input" />
        <button class="search_button">搜索</button>
        <i class="iconfont icon-search4"></i>
      </div>
      <div class="header_foot">
        <div class="header_foot1">
          <div class="foot1"></div>
        </div>
        <div class="header_foot2">
          <div class="foot2"></div>
        </div>
      </div>
    </header>
    <!-- 首页导航 -->
    <nav class="msite_nav">
      <div class="msite_navs">
        <div class="nav_white1"></div>
        <a href="javascript:;" class="nav_items">
          <div>
            <div class="food_container">
              <img src="../MSite/images/nav/1.png" alt="" />
            </div>
          </div>
          <span>美食</span>
        </a>
        <div class="nav_white2"></div>
        <a href="javascript:;" class="nav_items">
          <div>
            <div class="food_container">
              <img src="../MSite/images/nav/2.png" alt="" />
            </div>
          </div>
          <span>美团超市</span>
        </a>
        <div class="nav_white2"></div>
        <a href="javascript:;" class="nav_items">
          <div>
            <div class="food_container">
              <img src="../MSite/images/nav/3.png" alt="" />
            </div>
          </div>
          <span>生鲜果蔬</span>
        </a>
        <div class="nav_white2"></div>
        <a href="javascript:;" class="nav_items">
          <div>
            <div class="food_container">
              <img src="../MSite/images/nav/4.png" alt="" />
            </div>
          </div>
          <span>美团专送</span>
        </a>
        <div class="nav_white2"></div>
        <a href="javascript:;" class="nav_items">
          <div>
            <div class="food_container">
              <img src="../MSite/images/nav/5.png" alt="" />
            </div>
          </div>
          <span>晚餐优选</span>
        </a>
        <div class="nav_white1"></div>
      </div>
      <div class="msite_navs">
        <div class="nav_white1"></div>
        <a href="javascript:;" class="nav_items">
          <div>
            <div class="food_container">
              <img src="../MSite/images/nav/6.png" alt="" />
            </div>
          </div>
          <span>甜点饮品</span>
        </a>
        <div class="nav_white2"></div>
        <a href="javascript:;" class="nav_items">
          <div>
            <div class="food_container">
              <img src="../MSite/images/nav/7.png" alt="" />
            </div>
          </div>
          <span>小吃馆</span>
        </a>
        <div class="nav_white2"></div>
        <a href="javascript:;" class="nav_items">
          <div>
            <div class="food_container">
              <img src="../MSite/images/nav/8.png" alt="" />
            </div>
          </div>
          <span>家常菜</span>
        </a>
        <div class="nav_white2"></div>
        <a href="javascript:;" class="nav_items">
          <div>
            <div class="food_container">
              <img src="../MSite/images/nav/9.png" alt="" />
            </div>
          </div>
          <span>鲜花蛋糕</span>
        </a>
        <div class="nav_white2"></div>
        <a href="javascript:;" class="nav_items">
          <div>
            <div class="food_container">
              <img src="../MSite/images/nav/10.png" alt="" />
            </div>
          </div>
          <span>品牌连锁</span>
        </a>
        <div class="nav_white1"></div>
      </div>
    </nav>
    <!-- 首页背景 -->
    <div class="msite_bg">
      <div class="msite_bg1">
        <img src="./images/bg/1.jpg" alt="" />
      </div>
    </div>
    <div class="close">附近商家</div>
    <!-- 首页排序 -->
    <div class="msite_paixu">
      <div class="msite_paixu1">
        <div class="msite_paixu2">
          <ul>
            <li>
              综合排序
              <i class="iconfont icon-down"></i>
            </li>
            <li>销量最高</li>
            <li>距离最近</li>
            <li>
              筛选
              <i class="iconfont icon-down"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 首页附近商家 -->
    <shop-list></shop-list>
    <div style="height: 60px"></div>
  </section>
</template>

<script>
import ShopList from '@/components/ShopList/ShopList.vue'
export default {
  name: 'MSite',
  components: {
    ShopList
  }
}
</script>

<style lang="less" scoped>
.msite {
  width: 100%;
  // 首页头部
  .msite_header {
    width: 94%;
    position: fixed;
    z-index: 300;
    top: 0;
    padding: 1.6vw 3.2vw 0px 3.2vw;
    background-color: #ffcc33;
    display: flex;
    flex-direction: column;
    .header_location {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 8vw;
      transition: 200ms;
      overflow: hidden;
      .header_location1 {
        display: flex;
        line-height: 4.5vw;
        font-size: 14px;
        color: #222426;
        font-weight: 600;
        align-items: center;
        .icon-location {
          width: 4vw;
          height: 5vw;
          margin-right: 5px;
        }
        span {
          max-width: 90vw;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .icon-right::before {
          width: 10px;
          height: 10px;
          margin-left: 2px;
          margin-right: 20px;
        }
      }
      .header_location2 {
        flex: none;
      }
    }
    .header_search {
      flex: none;
      position: relative;
      margin: 1.6vw 0px 2.13333vw 0px;
      height: 10vw;
      border-radius: 100px;
      .icon-search4::before {
        width: 3.4vw;
        height: 3.4vw;
        margin: 0 5px 0 11px;
        position: absolute;
        left: 0;
        top: 30%;
        color: #dadada;
      }

      .search_input {
        width: 100%;
        height: 100%;
        position: relative;
        padding-left: 30px;
        border-radius: 100px;
        border-radius: border-box;
        overflow: hidden;
        padding-right: 30px;
        font-size: 3.5vw;
        color: #858687;
        opacity: 1;
        display: flex;
        align-items: center;
      }
      .search_button {
        position: absolute;
        top: 1.5vw;
        right: 0.9vw;
        color: #222426;
        line-height: 5vw;
        padding: 1.1vw 3.4vw;
        background-color: #ffce4d;
        border-radius: 5vw;
      }
    }
    .header_foot {
      width: 100vw;
      position: absolute;
      left: 0;
      top: 100%;
      height: 3.7vw;
      .header_foot1 {
        left: 0;
        position: absolute;
        background-color: #ffcc33;
        top: 0;
        width: 3.7vw;
        height: 3.7vw;
        .foot1 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
          border-radius: 3.7vw 0 0 0;
        }
      }
      .header_foot2 {
        right: 0;
        position: absolute;
        background-color: #ffcc33;
        top: 0;
        width: 3.7vw;
        height: 3.7vw;
        .foot2 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
          border-radius: 0 3.7vw 0 0;
        }
      }
    }
  }
  // 首页导航
  .msite_nav {
    overflow: hidden;
    background-color: #fff;
    margin-top: 102px;
    margin-bottom: 15px;
    max-height: 170px;
    // height: 170px;
    border-radius: 3.7vw;
    .msite_navs {
      display: flex;
      .nav_white1 {
        flex: 1 0 0;
      }
      .nav_items {
        display: block;
        width: 44px;
        text-align: center;
        position: relative;
        div {
          // position: relative;
          margin: 0 auto;
          .food_container {
            // position: absolute;
            position: relative;

            top: 0;
            left: 0;
            width: 44px;
            height: 44px;
            margin-top: 15px;
            margin-bottom: 5px;
            img {
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
            }
          }
        }
        span {
          width: 44px;
          line-height: 1.4;
          font-size: 11px;
          white-space: nowrap;
          opacity: 0.8;
          color: #222426;
        }
      }
      .nav_white2 {
        flex: 2 0 0;
      }
    }
  }
  // 首页背景
  .msite_bg {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4.8vw 3.7vw;
    background-color: #fff;
    .msite_bg1 {
      width: 100%;
      height: 89px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      overflow: hidden;
      border-radius: 3.2vw;
      img {
        width: 100%;
        height: 89px;
      }
    }
  }
  .close {
    color: #222426;
    font-size: 4.8vw;
    font-weight: 800;
    margin-top: 4.8vw;
    margin-bottom: 3.2vw;
    padding-left: 4.2vw;
  }
  // 首页排序
  .msite_paixu {
    position: relative;
    height: 11.2vw;
    .msite_paixu1 {
      width: 100%;
      position: absolute;
      left: 0;
      z-index: 10;
      .msite_paixu2 {
        position: relative;
        background-color: #fff;
        height: 12.1vw;
        padding: 1.3vw 3.2vw 1.6vw 3.2vw;
        box-sizing: border-box;
        ul {
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          li {
            color: #222426;
            // font-weight: 600;
            position: relative;
            display: inline-block;
            text-align: center;
            font-size: 3.2vw;
            i {
              margin-left: 1vw;
              display: line-block;
              width: 2.3vw;
              height: 2.3vw;
              color: #ccc;
            }
          }
        }
        ul::after {
          content: '';
          position: absolute;
          left: 3.2vw;
          right: 3.2vw;
          display: flex;
          height: 1px;
          width: 94%;
          background-color: #e4e4e4;
          bottom: 0;
        }
      }
    }
  }
  // 首页附近商家
  .msite_shop_list {
    font-size: 11px;
    .shop_list {
      overflow: hidden;
      background-color: #fff;
    }
    li .shop {
      padding: 12px;
      flex-direction: row;
      display: flex;
      text-decoration: none;
      box-sizing: border-box;
      margin-bottom: 6px;
      border-radius: 12px;
      background-color: #fff;
      .shop_img {
        width: 82px;
        height: 61px;
        position: relative;
        box-sizing: border-box;
        margin-right: 8px;
        img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 6px;
        }
      }
      .shop_message {
        flex: 1 0;
        .shop_location {
          font-size: 16px;
          color: #222426;
          line-height: 20px;
          white-space: nowrap;
          width: 80%;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 600;
        }
        .shop_message1 {
          margin-top: 3px;
          display: flex;
          .shop_message11 {
            display: inline-block;
            // height: 12px;
            i {
              color: #ff8000;
              font-size: 12px;
            }
            .message_star {
              color: #ff8000;
              font-weight: 600;
              margin-left: 4px;
              font-size: 14px;
              line-height: 14px;
            }
            .message_sell {
              margin-left: 10px;
              font-size: 11px;
              color: #858687;
              line-height: 14px;
              font-weight: 400;
            }
          }
          .shop_message12 {
            flex: 1 0;
            text-align: right;
            .message_time {
              font-size: 11px;
              color: #858687;
              line-height: 14px;
              font-weight: 400;
            }
            .message_distance {
              font-size: 11px;
              color: #858687;
              line-height: 14px;
              font-weight: 400;
            }
          }
        }
        .shop_message2 {
          margin-top: 4px;
          .money1 {
            font-size: 11px;
            color: #858687;
            line-height: 14px;
            font-weight: 400;
          }
          .money2 {
            width: 52px;
            height: 16px;
            float: right;
            display: flex;
            background-color: #ffcc33;
            border-radius: 4px;
            font-size: 11px;
            align-items: center;
            justify-content: center;
          }
        }
        .shop_message3 {
          position: relative;
          padding: 4px;
          display: inline-block;
          margin-top: 8px;
          white-space: nowrap;
          max-width: 90%;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 11px;
          color: #ff8000;
          line-height: 12px;
          background-color: #fff8e1;
          border-radius: 4px;
          .comment {
            vertical-align: bottom;
            line-height: 15px;
            height: 15px;
            display: inline-block;
          }
        }
        .shop_message4 {
          margin-top: 6px;
          position: relative;
          .shop_message41 {
            display: flex;
            overflow: hidden;
            box-sizing: border-box;
            .discout {
              height: 16px;
              display: flex;
              flex-wrap: wrap;
              flex-direction: column;
              .disount_block {
                display: flex;
                flex-wrap: wrap;
                .discount1 {
                  border: 1px solid transparent;
                  border-color: rgb(255, 198, 193);
                  flex: 0 0 auto;
                  font-size: 10px;
                  color: #fb4e44;
                  border-radius: 2px;
                  margin-right: 6px;
                  box-sizing: border-box;
                  display: flex;
                  align-items: center;
                  margin-bottom: 3.5px;
                  height: 16px;
                  overflow: hidden;
                  .d_lb-wrap {
                    height: 16px;
                    .d_lb {
                      padding: 0 3.5px;
                      margin-bottom: 3.5px;
                      height: 16px;
                      line-height: 16px;
                      position: relative;
                      color: rgb(255, 74, 38);
                      background-color: rgb(255, 255, 255);
                      display: inline-block;
                      span {
                        position: absolute;
                        left: 0;
                        top: 50%;
                        margin-top: -4px;
                        background-color: rgb(253, 201, 198);
                        width: 1px;
                        height: 8px;
                      }
                    }
                  }
                }
              }
            }
            .discout2 {
              height: auto;
              display: flex;
              flex-wrap: wrap;
              flex-direction: column;
              .disount_block {
                display: flex;
                flex-wrap: wrap;
                .discount1 {
                  border: 1px solid transparent;
                  border-color: rgb(255, 198, 193);
                  flex: 0 0 auto;
                  font-size: 10px;
                  color: #fb4e44;
                  border-radius: 2px;
                  margin-right: 6px;
                  box-sizing: border-box;
                  display: flex;
                  align-items: center;
                  margin-bottom: 3.5px;
                  height: 16px;
                  overflow: hidden;
                  .d_lb-wrap {
                    height: 16px;
                    .d_lb {
                      padding: 0 3.5px;
                      margin-bottom: 3.5px;
                      height: 16px;
                      line-height: 16px;
                      position: relative;
                      color: rgb(255, 74, 38);
                      background-color: rgb(255, 255, 255);
                      display: inline-block;
                      span {
                        position: absolute;
                        left: 0;
                        top: 50%;
                        margin-top: -4px;
                        background-color: rgb(253, 201, 198);
                        width: 1px;
                        height: 8px;
                      }
                    }
                  }
                }
              }
            }
          }
          .down {
            font-size: 10px;
            position: absolute;
            top: 4px;
            right: 0;
            transform-origin: center;
            color: #ccc;
          }
        }
      }
    }
  }
}
</style>

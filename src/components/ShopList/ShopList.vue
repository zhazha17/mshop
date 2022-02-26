<template>
  <div class="msite_shop_list">
    <ul class="shop_list">
      <!-- 麦当劳 -->
      <li>
        <a href="javascript:;" class="shop">
          <div class="shop_img">
            <img src="./images/shop/maidanglao.png" alt="" />
          </div>
          <div class="shop_message">
            <div class="shop_location">麦当劳&麦咖啡（佛山魁奇一路店）</div>
            <div class="shop_message1">
              <div class="shop_message11">
                <i class="iconfont icon-star-fill"></i>
                <span class="message_star">4.7</span>
                <span class="message_sell">月售3000+</span>
              </div>
              <div class="shop_message12">
                <span class="message_time">28分钟</span>&nbsp;
                <span class="message_distance">1.8km</span>
              </div>
            </div>
            <div class="shop_message2">
              <span class="money1">起送 ¥0</span>&nbsp; <span class="money1">配送 ¥9</span>&nbsp;
              <span class="money1">人均 ¥38</span>
            </div>
            <div class="shop_message3">
              <span class="comment">大众点评高分店铺</span>
            </div>
            <div class="shop_message4">
              <div class="shop_message41">
                <div class="discout">
                  <div class="disount_block">
                    <div class="discount1">
                      <div class="d_lb-wrap">
                        <div class="d_lb">79减20</div>
                        <div class="d_lb">
                          109减30
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div class="discount1">
                      <div class="d_lb-wrap">
                        <div class="d_lb">4.97折起</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
      <!-- 潮汕猪脚饭 -->
      <li>
        <a href="javascript:;" class="shop">
          <div class="shop_img">
            <img src="./images/shop/zhoujiaofan.png" alt="" />
          </div>
          <div class="shop_message">
            <div class="shop_location">潮汕隆江猪脚饭</div>
            <div class="shop_message1">
              <div class="shop_message11">
                <i class="iconfont icon-star-fill"></i>
                <span class="message_star">4.6</span>
                <span class="message_sell">月售9000+</span>
              </div>
              <div class="shop_message12">
                <span class="message_time">34分钟</span>&nbsp;
                <span class="message_distance">615m</span>
              </div>
            </div>
            <div class="shop_message2">
              <span class="money1">起送 ¥15</span>&nbsp; <span class="money1">免配送费</span>&nbsp;
              <span class="money1">人均 ¥18</span>
            </div>
            <div class="shop_message4">
              <div class="shop_message41">
                <div class="discout2">
                  <div class="disount_block">
                    <div class="discount1">
                      <div class="d_lb-wrap">
                        <div class="d_lb">25减3</div>
                        <div class="d_lb">
                          55减5
                          <span></span>
                        </div>
                        <div class="d_lb">
                          85减20
                          <span></span>
                        </div>
                        <div class="d_lb" style="background-color: rgb(255, 239, 244)">
                          含2元津贴
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div class="discount1">
                      <div class="d_lb-wrap none">
                        <div class="d_lb">新客减1</div>
                      </div>
                    </div>
                    <div class="discount1" v-if="show">
                      <div class="d_lb-wrap">
                        <div class="d_lb">0.02折起</div>
                      </div>
                    </div>
                    <div class="discount1" style="border-color: rgb(180, 236, 230)" v-if="show">
                      <div class="d_lb-wrap">
                        <div class="d_lb" style="color: rgb(21, 176, 160); background-color: rgb(255, 255, 255)">支持自取</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <i class="iconfont icon-down down" @click="remove"></i>
            </div>
          </div>
        </a>
      </li>
      <!-- 肯德基 -->
      <li>
        <a href="javascript:;" class="shop">
          <div class="shop_img">
            <img src="./images/shop/kendeji.png" alt="" />
          </div>
          <div class="shop_message">
            <div class="shop_location">肯德基宅急送（兆阳广场店）</div>
            <div class="shop_message1">
              <div class="shop_message11">
                <i class="iconfont icon-star-fill"></i>
                <span class="message_star">4.7</span>
                <span class="message_sell">月售1000+</span>
              </div>
              <div class="shop_message12">
                <span class="message_time">30分钟</span>&nbsp;
                <span class="message_distance">68m</span>
              </div>
            </div>
            <div class="shop_message2">
              <span class="money1">起送 ¥0</span>&nbsp; <span class="money1">配送 ¥6 <del>¥9</del></span
              >&nbsp;
              <span class="money1">人均 ¥38</span>
            </div>
            <!-- <div class="shop_message3">
                <span class="comment">大众点评高分店铺</span>
              </div> -->
            <div class="shop_message4">
              <div class="shop_message41">
                <div class="discout">
                  <div class="disount_block">
                    <div class="discount1">
                      <div class="d_lb-wrap">
                        <div class="d_lb">49减6</div>
                        <div class="d_lb">
                          89减25
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div class="discount1">
                      <div class="d_lb-wrap">
                        <div class="d_lb">4.97折起</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
      <!-- 煲仔饭 -->
      <li>
        <a href="javascript:;" class="shop">
          <div class="shop_img">
            <img src="./images/shop/baozaifan.png" alt="" />
          </div>
          <div class="shop_message">
            <div class="shop_location">禾味滋煲仔饭（深村的店）</div>
            <div class="shop_message1">
              <div class="shop_message11">
                <i class="iconfont icon-star-fill"></i>
                <span class="message_star">4.7</span>
                <span class="message_sell">月售5000+</span>
              </div>
              <div class="shop_message12">
                <span class="message_time">36分钟</span>&nbsp;
                <span class="message_distance">885m</span>
              </div>
            </div>
            <div class="shop_message2">
              <span class="money1">起送 ¥0</span>&nbsp; <span class="money1">配送 ¥0.8<del>¥ 3.5</del></span
              >&nbsp;
              <span class="money1">人均 ¥19</span>
            </div>
            <div class="shop_message4">
              <div class="shop_message41">
                <div class="discout2">
                  <div class="disount_block">
                    <div class="discount1">
                      <div class="d_lb-wrap">
                        <div class="d_lb">25减15</div>
                        <div class="d_lb">
                          45减20
                          <span></span>
                        </div>
                        <div class="d_lb">
                          65减25
                          <span></span>
                        </div>
                        <div class="d_lb">
                          120减45
                          <span></span>
                        </div>
                        <div class="d_lb" style="background-color: rgb(255, 239, 244)">
                          含5元津贴
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div class="discount1" v-if="show">
                      <div class="d_lb-wrap none">
                        <div class="d_lb">1.98折起</div>
                      </div>
                    </div>
                    <div class="discount1" v-if="show">
                      <div class="d_lb-wrap">
                        <div class="d_lb">领2元券</div>
                      </div>
                    </div>
                    <div class="discount1" v-if="show">
                      <div class="d_lb-wrap">
                        <div class="d_lb">返6元券</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <i class="iconfont icon-down down" @click="remove"></i>
            </div>
          </div>
        </a>
      </li>
      <!-- 奈雪的茶 -->
      <li>
        <a href="javascript:;" class="shop">
          <div class="shop_img">
            <img src="./images/shop/naixue.png" alt="" />
          </div>
          <div class="shop_message">
            <div class="shop_location">奈雪的茶（佛山天虹店）</div>
            <div class="shop_message1">
              <div class="shop_message11">
                <i class="iconfont icon-star-fill"></i>
                <span class="message_star">4.7</span>
                <span class="message_sell">月售3000+</span>
              </div>
              <div class="shop_message12">
                <span class="message_time">61分钟</span>&nbsp;
                <span class="message_distance">2.3km</span>
              </div>
            </div>
            <div class="shop_message2">
              <span class="money1">起送 ¥20</span>&nbsp; <span class="money1">配送 ¥4.5</span>&nbsp;
              <span class="money1">人均 ¥26</span>
              <span class="money2">美团专送</span>
            </div>
            <div class="shop_message3">
              <span class="comment">大众点评高分店铺</span>
            </div>
            <div class="shop_message4">
              <div class="shop_message41">
                <div class="discout">
                  <div class="disount_block">
                    <div class="discount1">
                      <div class="d_lb-wrap">
                        <div class="d_lb">100减1</div>
                      </div>
                    </div>
                    <div class="discount1">
                      <div class="d_lb-wrap">
                        <div class="d_lb">新客减1</div>
                      </div>
                    </div>
                    <div class="discount1">
                      <div class="d_lb-wrap">
                        <div class="d_lb">8.8折起</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
      <!-- 华莱士 -->
      <li>
        <a href="javascript:;" class="shop">
          <div class="shop_img">
            <img src="./images/shop/hualaishi.png" alt="" />
          </div>
          <div class="shop_message">
            <div class="shop_location">华莱士·全鸡汉堡(深村店)</div>
            <div class="shop_message1">
              <div class="shop_message11">
                <i class="iconfont icon-star-fill"></i>
                <span class="message_star">4.4</span>
                <span class="message_sell">月售2000+</span>
              </div>
              <div class="shop_message12">
                <span class="message_time">36分钟</span>&nbsp;
                <span class="message_distance">1.1km</span>
              </div>
            </div>
            <div class="shop_message2">
              <span class="money1">起送 ¥18</span>&nbsp; <span class="money1">配送 ¥2<del>¥4.5</del></span
              >&nbsp;
              <span class="money1">人均 ¥21</span>
            </div>
            <div class="shop_message4">
              <div class="shop_message41">
                <div class="discout2">
                  <div class="disount_block">
                    <div class="discount1">
                      <div class="d_lb-wrap">
                        <div class="d_lb">10减8</div>
                        <div class="d_lb">
                          30减18
                          <span></span>
                        </div>
                        <div class="d_lb">
                          60减33
                          <span></span>
                        </div>
                        <div class="d_lb">
                          95减48
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div class="discount1">
                      <div class="d_lb-wrap none">
                        <div class="d_lb">0.08折起</div>
                      </div>
                    </div>
                    <div class="discount1" style="border-color: rgb(180, 236, 230)" v-if="show">
                      <div class="d_lb-wrap">
                        <div class="d_lb" style="color: rgb(21, 176, 160); background-color: rgb(255, 255, 255)">支持自取</div>
                      </div>
                    </div>
                    <div class="discount1" style="border-color: rgb(180, 236, 230)" v-if="show">
                      <div class="d_lb-wrap">
                        <div class="d_lb" style="color: rgb(21, 176, 160); background-color: rgb(255, 255, 255)">极速退款</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <i class="iconfont icon-down down" @click="remove"></i>
            </div>
          </div>
        </a>
      </li>
      <!-- 喜茶 -->
      <li>
        <a href="javascript:;" class="shop">
          <div class="shop_img">
            <img src="./images/shop/xicha.png" alt="" />
          </div>
          <div class="shop_message">
            <div class="shop_location">喜茶（佛山新DNA购物中心店）</div>
            <div class="shop_message1">
              <div class="shop_message11">
                <i class="iconfont icon-star-fill"></i>
                <span class="message_star">4.4</span>
                <span class="message_sell">月售2000+</span>
              </div>
              <div class="shop_message12">
                <span class="message_time">66分钟</span>&nbsp;
                <span class="message_distance">1.6km</span>
              </div>
            </div>
            <div class="shop_message2">
              <span class="money1">起送 ¥20</span>&nbsp; <span class="money1">配送 ¥9.5</span>&nbsp;
              <span class="money2">美团专送</span>
            </div>
          </div>
        </a>
      </li>
      <!-- 麻辣烫 -->
      <li>
        <a href="javascript:;" class="shop">
          <div class="shop_img">
            <img src="./images/shop/malatang.png" alt="" />
          </div>
          <div class="shop_message">
            <div class="shop_location">刘波麻辣烫（季华店）</div>
            <div class="shop_message1">
              <div class="shop_message11">
                <i class="iconfont icon-star-fill"></i>
                <span class="message_star">4.7</span>
                <span class="message_sell">月售7000+</span>
              </div>
              <div class="shop_message12">
                <span class="message_time">35分钟</span>&nbsp;
                <span class="message_distance">672m</span>
              </div>
            </div>
            <div class="shop_message2">
              <span class="money1">起送 ¥15</span>&nbsp; <span class="money1">免配送费</span>&nbsp;
              <span class="money1">人均 ¥19</span>
            </div>
            <div class="shop_message4">
              <div class="shop_message41">
                <div class="discout2">
                  <div class="disount_block">
                    <div class="discount1">
                      <div class="d_lb-wrap">
                        <div class="d_lb">22减9</div>
                        <div class="d_lb">
                          39减15
                          <span></span>
                        </div>
                        <div class="d_lb">
                          68减25
                          <span></span>
                        </div>
                        <div class="d_lb">
                          88减35
                          <span></span>
                        </div>
                        <div class="d_lb">
                          119减40
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div class="discount1">
                      <div class="d_lb-wrap none" v-if="show">
                        <div class="d_lb">新客减1</div>
                      </div>
                    </div>
                    <div class="discount1" v-if="show">
                      <div class="d_lb-wrap">
                        <div class="d_lb">4.5折起</div>
                      </div>
                    </div>
                    <div class="discount1" v-if="show">
                      <div class="d_lb-wrap">
                        <div class="d_lb">第二份半价</div>
                      </div>
                    </div>
                    <div class="discount1" v-if="show">
                      <div class="d_lb-wrap">
                        <div class="d_lb">领5元券</div>
                      </div>
                    </div>
                    <div class="discount1" style="border-color: rgb(180, 236, 230)" v-if="show">
                      <div class="d_lb-wrap">
                        <div class="d_lb" style="color: rgb(21, 176, 160); background-color: rgb(255, 255, 255)">支持自取</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <i class="iconfont icon-down down" @click="remove"></i>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShopList',
  data() {
    return {
      show: false
    }
  },
  methods: {
    remove() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="less" scoped>
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
</style>

# 仿美团外卖

# 1 准备

## 1.1 项目描述

1. 此项目为外卖 Web App（SPA）
2. 包括商家，商品，用户等多个子模块
3. 使用 Vue 全家桶 + ES6 + Webpack 等前端技术
4. 采用模块化、组件化、工程化的模式开发

## 1.2 技术选型



## 1.3 前端路由

## 1.4 API 接口



## 1.5 项目 vue 组件





## 1.6 从项目中学到什么

### 1.6.1 流程及开发方法

1. 熟悉一个项目的开发流程
2. 学会模块化、组件化、工程化的开发模式
3. 掌握使用 vue-cli 脚手架初始化 Vue.js 项目
4. 学会模拟 json 后端数据，实现前后端分离开发
5. 学会 ES6 + eslint 的开发方式
6. 掌握一些项目优化技巧

### 1.6.2 Vue 插件或第三方库

1. 学会使用 vue-router 开发单页应用
2. 学会使用 axios/vue-resource 与后端进行数据交互
3. 学会使用 vuex 管理应用组件状态
4. 学会使用 better-scroll/vue-scroller 实现页面滑动效果
5. 学会使用 mint-ui 组件库构建页面
6. 学会使用 vue-lazyload 实现图片懒加载
7. 学会使用 mockjs 模拟后端数据接口

### 1.6.3 样式/布局/效果相关

1. 学会使用 less 编写模块化的 css
2. 学会使用  Vue.js 的过渡编写酷炫的交互动画
3. 学会制作并使用图标字体
4. 学会解决移动端 1px 边框问题
5. 学会移动端经典的 css sticky footer 布局
6. 学会 flex 弹性布局

# 2 应用开发

## 2.1 开启项目开发

### 2.1.1 使用 vue-cli (脚手架)搭建项目

1. vue-cli 是 vue 官方提供的用于搭建基于 vue + webpack + es6 项目的脚手架工具
2. 操作

```````
npm install -g @vue-cli  // 安装vue-cli
git init // 添加 git 仓库
vue create mshop // 创建 mshop 项目
cd mshop
npm install
npm run dev
访问：localhost:8080
```````

### 2.1.2 项目结构分析

``````
mshop 
	|-- build：webpack 相关的配置文件夹
     |-- node_modules：依赖√
     |-- src：源码文件夹√
     	|-- main.js：应用入口 js 
     |-- static：静态资源文件夹
     |-- babel.config.js：babel 的配置文件
     |-- .editorconfig：通过编辑器的编码/格式进行一定的配置√
     |-- .eslintrc.js：eslint 检查的配置√
     |-- .gitignore：git 版本管制忽略的配置√
     |-- index.html：主页面文件√
     |-- package.json：应用包配置文件√
     |-- README.md：应用描述说明的 readme 文件
``````

### 2.1.3 编码测试与打包发布项目

1. 编码测试(开发环境运行)

   `npm run serve`

   访问：http://localhost:8080

   编码，自动编译打包，查看效果

2. 打包发布（生产环境打包）

   `npm run build`

   `npm install -g serve`

   `serve dist`

   访问：http://localhost:5000

## 2.2 功能需求分析

## 2.3 资源准备

### 2.3.1 相关概念

1. 标注图(设计稿)：对应用界面各个组成元素进行坐标/大小/颜色等进行标签的界面图
2. 切图：将应用界面的一些静态图形部分，通过工具(如 photoshop)剪裁生成的图片
3. 图片 Base64：样式中引用的小图片，在 webpack 打包会自动处理转换为样式内部的 Base64 编码字符串
4. 2x 和 3x 图：不同手机的屏幕密度不一样，一般都在 2 以上，为了适配不同的手机，UI 设计师为同一个图片制作了 2x 和 3x 的 2 套图片

### 2.3.2 iconfont 图标字体

1. iconfont 介绍
   - 意义：使用字体用 HTML 代码以文本的形式直接在网页中画 icon 小图标
   - 使用 icon 字体图标可以大大减少图标维护工作量
   - 灵活性：轻松地改变图标的颜色或其他 CSS 效果
   - 可扩展性：改变图标的大小，就像改变字体大小一样
   - 矢量性：图标是矢量的，与像素无关。缩放图标不会影响清晰度
2. iconfont 使用
   - 目前国内使用最多的是阿里巴巴矢量库（http://www.iconfont.cn/）
   - 将 font-class 下载到本地
   - 在页面中引入在线的 iconfont 样式(在 index.html 页面中引入)

`````
<link rel="stylesheet" href="http://at.alicdn.com/font_518606_6676bmcalnrhehfr.css">、
// href 是字体图标库中的地址，添加新的图标后，要更新地址
<i class="iconfont icon-arrow-left"></i>
`````

### 2.3.3 项目源码目录设计

- components 路由组件文件夹
  - 非路由组件文件
  - pages 路由组件文件夹
- mock 模拟数据接口文件
- router 路由器文件夹
- store vuex相关模块文件夹
- App.vue 应用组件
- main.js 入口 js
- assets 通过资源文件夹，如 fonts/img/css

## 2.4 Vue 组件化

### 2.4.1 分析应用的整体 vue 组件结构

`````
src
	|-- components--------------路由组件文件夹
		|-- FooterGuide--------------底部组件文件夹
			|-- FooterGuide.vue--------------底部组件 vue
		|-- pages--------------路由组件文件夹
			|-- Msite--------------首页组件文件夹
				|-- Msite.vue--------------首页组件 vue
			|-- Search--------------搜索组件文件夹
				|-- Search.vue--------------搜索组件 vue
			|-- Order--------------订单组件文件夹
				|-- Order.vue--------------订单组件 vue
			|-- Profile--------------个人组件文件夹
				|-- Profile.vue--------------个人组件 vue
	|-- App.vue--------------应用根组件 vue
	|-- main.js--------------应用入口 js
`````

### 2.4.2 引入 reset 样式

在 https://www.css-reset.com/ 上的 初始化reset 样式

### 2.4.3 移动端

1. viewport

``````
<meat name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
``````

2. 解决点击响应延时 0.3s 问题

``````
<script src="https://as.alipayobjects.com/g/compoment/fastclick/1.0.3/fastclick.js"></script>
<script>
    if ('addEventListener' in document) {
      document.addEventListener(
        'DOMContentLoaded',
        function () {
          FastClick.attach(document.body)
        },
        false
      );
      if(!window.Promise){
        document.writeln('<script src="https://as.alipayobjects.com/g/compoment/es6-promise/3.2.2/es6-promise"></script>')
      }
    }
</script>
``````

## 2.5 引入 vue-router

### 2.5.1 下载 vue-router

`npm install vue-router --save`

### 2.5.2 代码

1. 在 router 文件夹下新建 index.js 文件。router/index.js

```````
// 1. 导入 Vue 和 VueRouter 的包
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../components/pages/MSite/MSite.vue'
// 2. 调用 Vue.use() 函数，把 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)
// 3. 创建路由的实例对象
const router = new VueRouter({
  // 所有路由
  routes: [
    { path: '/', redirect: '/msite' },
    { path: '/msite', component: MSite }
  ]
})
// 4. 向外共享路由的实例对象
export default router
```````

2. 在 main.js 中配置路由

配置路由产生了一些结果

- 多了几个组件标签
  - `<router-link>` 与 `<router-view>` 与 `<keep-alive>`
- 多个两个属性可以访问

`````
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 在 Vue 项目中，要想把路由用起来，必须把路由实例对象，通过下面的方式进行挂载
  	// router:路由的实例对象
    // 2. 挂载路由模块
  router
}).$mount('#app')

`````

## 2.6 MSite 首页组件

在 App.vue 页面中引入首页，并插入路由

```````
<template>
  <div>
    <router-view></router-view>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style lang="less" scoped></style>

```````

## 2.7 FooterGuide 组件

### 2.7.1 说明

1. 通过编程式导航实现路由的切换显示($router)
2. 通过动态 class 和 $route.path 来实现 tab 样式切换
3. 通过阿里图标库，显示导航图标

### 2.7.2 编码

1. 静态页面

``````
<div class="footer_guide">
    <a href="javascript:;" class="guide_item on">
      <span class="item_icon">
        <i class="iconfont icon-home1"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-order1"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-profilefill"></i>
      </span>
      <span>我的</span>
    </a>
</div>
``````

2. 当切换路由时，页面切换，要求底部的也跟随切换（即底部的样式跟随切换）

强制动态的绑定 class ，是否用对象语法，当类名确定，只是不确定有或没有这个类名时，使用一个对象，属性，布尔值 `:class="{on:'/msite'===$route.path}"`   当前路由是否等于请求的路径

```````
<div class="footer_guide">
    <a href="javascript:;" class="guide_item" :class="{ on: '/msite' === $route.path }">
      <span class="item_icon">
        <i class="iconfont icon-home1"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{ on: '/order' === $route.path }">
      <span class="item_icon">
        <i class="iconfont icon-order1"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{ on: '/profile' === $route.path }">
      <span class="item_icon">
        <i class="iconfont icon-profilefill"></i>
      </span>
      <span>我的</span>
    </a>
</div>
```````

3. 增加点击事件，点击 tab 按钮，进行切换页面

```````
<div class="footer_guide">
    <span href="javascript:;" class="guide_item" :class="{ on: '/msite' === $route.path }" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-home1"></i>
      </span>
      <span>首页</span>
    </span>
    <span href="javascript:;" class="guide_item" :class="{ on: '/order' === $route.path }" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-order1"></i>
      </span>
      <span>订单</span>
    </span>
    <span href="javascript:;" class="guide_item" :class="{ on: '/profile' === $route.path }" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-profilefill"></i>
      </span>
      <span>我的</span>
    </span>
</div>
```````

``````
export default {
  methods: {
    goTo(path) {
      this.$router.replace(path)
    }
  }
}
``````

## 2.8 各导航路由组件

### 2.8.1 Msite 组件

在 Msite 组件的页面写页面与样式

### 2.8.2 Order 组件

在Order 组件的页面写页面与样式

### 2.8.3 Profile 组件

在 Profile 组件的页面写页面与样式

## 2.9 HeaderTop 组件

### 2.9.1 说明

在三个组件中有相似的头部，所以可以用一个组件 HeaderTop，来进行插槽，简化代码以及提高代码的维护性

### 2.9.2 components/HeaderTop

在 components 中新建 HeaderTop 文件夹以及 HeaderTop.vue 文件

利用 `<slot>` 标签进行插槽，为其他两个组件预留位置

````````
<template>
  <div class="container">
    <header>
      <slot></slot>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderTop'
}
</script>
````````

### 2.9.3 Order.vue

在该组件中定义 HeaderTop 组件，在使用 HeaderTop 组件的地方，利用标签的形式插入 HeaderTop 组件

### 2.9.4 Profile.vue

在该组件中定义 HeaderTop 组件，在使用 HeaderTop 组件的地方，利用标签的形式插入 HeaderTop 组件

## 2.10 ShopList 组件(静态)

将商家列表封装为单独的一个 ShopList 组件

要注意图片的路径

## 2.11 Login 组件(登录/注册)

要求：点击“我的”中的“登录/注册”，跳转到登录/注册页面

- 在路由中添加“登录/注册”组件的路由
- 在 Profile 组件中的“登录/注册”，将要跳转的 a 链接换为`<route-link>` 标签
- 为左上角的返回字体图标添加点击事件，点击它时，返回上一步

```````
@click="$router.back()"
```````

- 在进入到该页面时，不显示底部组件，即在 App.vue 的根组件中，显示底部组件，需要加一个条件

``````
// App.vue 组件中
<template>
  <div id="app">
    <router-view></router-view>
    <footer-guide v-if="$route.meta.showFooter"></footer-guide>
  </div>
</template>
``````

为所有要显示底部组件的组件的路由添加一个 `meta` 对象，当 `$route.meta.showFooter` 为 true 时，才会显示底部组件

```````
// 路由中 index.js
routes: [
    { path: '/', redirect: '/msite' },
    { path: '/msite', component: MSite, meta: { showFooter: true } },
    { path: '/order', component: Order, meta: { showFooter: true } },
    { path: '/profile', component: Profile, meta: { showFooter: true } },
    { path: '/login', component: Login }
  ]
```````

- 为该组件添加 html+css 时，用到 Mint UI 组件库的 Switch 

1. 安装 mint ui `npm install mint-ui -S`
2. 引入组件

- 引入全部组件

``````
// 引入全部组件
import Vue from 'vue';
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.min.css'
Vue.use(Mint);
``````

- 按需引入部分组件

``````
import { Cell, Checklist } from 'mint-ui';
import '../node_modules/mint-ui/lib/style.min.css'
Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
``````

这里使用按需引入组件，在对应的位置使用组件

```````
<mt-switch></mt-switch>
```````

如果要修改样式，要在类名的的前面加 `/deep/`

# 3 后台应用

### 3.1 说明

- 这是一个前后端分离的项目
- 后台应用负责处理前台应用提交的请求，并为前台应用返回 json 数据
- 前台应用负责显示数据，与用户交互，与后台应用交互

### 3.2 运行后台应用

1. 确保启动 mongodb 服务，用管理员身份打开 cmd，执行`net start mongodb` 命令
2. 启动服务器应用 `npm start`
3. 在 postman 中测试 API 接口文档中的接口














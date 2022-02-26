import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../components/pages/MSite/MSite.vue'
import Order from '../components/pages/Order/Order.vue'
import Profile from '../components/pages/Profile/Profile.vue'
// 登录/注册页面
import Login from '../components/pages/Login/Login.vue'
// 声明使用插件
Vue.use(VueRouter)

const router = new VueRouter({
  // 所有路由
  routes: [
    { path: '/', redirect: '/msite' },
    { path: '/msite', component: MSite, meta: { showFooter: true } },
    { path: '/order', component: Order, meta: { showFooter: true } },
    { path: '/profile', component: Profile, meta: { showFooter: true } },
    { path: '/login', component: Login }
  ]
})
export default router

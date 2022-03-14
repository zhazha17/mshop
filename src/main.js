import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
// import store from './store'
// 引入全局样式
import '../src/assets/css/reset.css'
// 按需引入 mint-ui 的 switch
import { Switch } from 'mint-ui'
import '../node_modules/mint-ui/lib/style.min.css'
Vue.component(Switch.name, Switch)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  // 使用 vue-router
  router
  // 使用 vuex
  // store
}).$mount('#app')

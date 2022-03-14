<template>
  <div id="app">
    <router-view></router-view>
    <footer-guide v-if="$route.meta.showFooter"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import { reqFoodTypes } from './api/index.js'
export default {
  name: 'App',
  async mounted() {
    const data = await reqFoodTypes()
    console.log(data)
    // 通过this.$store.dispatch 方法触发调用Action
    // this.$store.dispatch('getAddress')
  },
  components: {
    FooterGuide
  }
}
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  // background-color: #f5f5f5;
  // position: relative;
}
</style>

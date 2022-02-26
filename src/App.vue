<template>
  <div id="app">
    <router-view></router-view>
    <footer-guide v-if="$route.meta.showFooter"></footer-guide>
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

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  // background-color: #f5f5f5;
  // position: relative;
}
</style>

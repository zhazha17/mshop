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

<style lang="less" scoped>
.container {
  width: 100%;
  background-color: #ffcc33;
  background-size: cover;
  overflow: hidden;
  header {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    border-bottom: 2px solid #eee;
  }
}
</style>

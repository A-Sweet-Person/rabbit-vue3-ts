<script lang="ts" setup name="AppHeaderSticky">
import AppHeaderNav from './app-header-nav.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
// 监听滚动条的滚动，获取滚动的距离，滚动距离 >= 78 动态的设置 show 类
// 等dom加载完，注册事件监听 created（vue3中直接写setup中） mounted （注册生命周期事件）
const y = ref(0)
const onScroll = () => {
  y.value = document.documentElement.scrollTop
}
onMounted(() => {
  window.addEventListener('scroll', onScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <!-- v-if 不要加在最外面盒子，需要有俩个状态，才能渐变动画 -->
  <div class="app-header-sticky" :class="{ show: y >= 78 }">
    <!-- 如果这个容器，没有吸顶出来，内容不需要显示 -->
    <div class="container" v-if="y >= 78">
      <RouterLink class="logo" to="/" />
      <AppHeaderNav />
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);
  &.show {
    transition: all 0.3s linear;
    transform: translateY(0%);
  }
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url(@/assets/images/logo.png) no-repeat right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid @xtxColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: @xtxColor;
      }
    }
  }
}
</style>

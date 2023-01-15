<script lang="ts" setup>
import useStore from '@/store'

const { home } = useStore()
home.getBannerList()
</script>

<template>
  <div class="home-banner">
    <!-- 轮播图 -->
    <!-- slides图片数据  autoPlay 是否自动轮播 duration动画切换时间 -->
    <XtxCarousel :slides="home.bannerList" autoPlay :duration="1000"></XtxCarousel>
  </div>
</template>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  // background-color: pink;
  :deep(.carousel-btn.prev) {
    left: 270px !important;
  }
  :deep(.carousel-indicator) {
    padding-left: 250px;
  }
}
</style>

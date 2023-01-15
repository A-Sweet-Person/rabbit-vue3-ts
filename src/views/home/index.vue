<script lang="ts" setup name="Home">
import HomeBanner from './components/home-banner.vue'
import HomeCategory from './components/home-category.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand.vue'
import HomeProduct from './components/home-product.vue'
import HomeSpecial from './components/home-special.vue'
</script>
<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- banner轮播图 -->
        <HomeBanner />
      </div>
      <!-- 新鲜好物 -->
      <HomeNew></HomeNew>
      <!-- <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
        <template #right>
          <XtxMore></XtxMore>
        </template>
        <div>我是内容</div>
      </HomePanel> -->
      <!-- 人气推荐 -->
      <HomeHot></HomeHot>
      <!-- 热门品牌 -->
      <HomeBrand></HomeBrand>
      <!-- 商品区域 -->
      <HomeProduct />
      <!-- 最新专题 -->
      <HomeSpecial />
    </div>
  </div>
</template>

<style></style>

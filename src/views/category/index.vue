<script lang="ts" name="TopCategory" setup>
// useRoute是用来接收params参数的 useRouter是跳转
import { watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params)
// 监听
// watch(
//   () => route.path,
//   () => {
//     console.log(111)
//   }
// )
</script>
<template>
  <div class="category">一类分类组件{{ route.params }}</div>
</template>

<style></style>

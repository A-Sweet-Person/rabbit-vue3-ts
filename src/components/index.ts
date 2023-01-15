// 统一的注册所有的全局组件
import XtxSkeleton from '@/components/skeleton/index.vue'
import XtxCarousel from './carousel/index.vue'
import XtxMore from './more/index.vue'
import { App } from 'vue' 
import { useIntersectionObserver } from '@vueuse/core'
import defaultImg from '@/assets/images/load.gif'
export default {
  install(app: App) {
     // 全局注册组件
    // app 创建出来的应用实例 =>类型是固定的 => vue库内部会提供好实例类型的
    app.component('XtxSkeleton', XtxSkeleton)
    app.component('XtxCarousel', XtxCarousel)
    app.component('XtxMore', XtxMore)
  // 自定义指令
    // <img :src="item.src" alt="" />
    // <img v-lazy="item.src" alt="" />
    app.directive('lazy', {
      mounted(el: HTMLImageElement, { value }) {
        // 图片的懒加载逻辑
        // 参数1：回调函数
        // 参数2：可选的配置
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // 停止监听
            stop()
            // 给el元素设置src属性
            // value = '123.jpg'
            el.src = value
            // 如果图片加载失败，显示默认的图片
            el.onerror = function () {
              el.src =  defaultImg
            }
          }
        })
      }
    })
  }
}

import {createRouter,createWebHashHistory} from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Home from '@/views/home/index.vue'
const router = createRouter({
  //路由模式路径不带#号
  history:createWebHashHistory(),
  // 配置路由
  routes:[
    {path:'/', //路径
    component:Layout, // 首页
    children:[
      { 
        path:'',
        component:Home
      },
      {
        path:'/category/:id',
      component:()=>import('@/views/category/index.vue')
      },
      {
        path:'/category/sub/:id',
      component:()=>import('@/views/category/sub.vue')
      }
    ]
  },
    {path:'/login', // 登录
  component:()=>import('@/views/login/index.vue')
  }
  ]
})
export default router
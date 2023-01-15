import { ApiRes, BannerItem ,GoodItem,HotGoods,Brand ,HomeProduct,Special} from '@/types/data'
import request from '@/utils/request'
import { defineStore } from 'pinia'
export default defineStore('home', {
  state: () => ({
    bannerList: [] as BannerItem[], // 类型断言
    newGoodList: [] as GoodItem[], //新鲜好物数据
    hotGoodList: [] as HotGoods[] ,//人气推荐数据
    brandList: [] as Brand[],// 品牌数据
    productList: [] as HomeProduct[],//生鲜
    specialList: [] as Special[],//最新专题
  }),
  actions: {
    async getBannerList() {
      const res = await request.get<ApiRes<BannerItem[]>>('/home/banner')
      this.bannerList = res.data.result
      // console.log(res.data.result);
    },
    // 新鲜好物
    async getNewList() {
      const res = await request.get<ApiRes<GoodItem[]>>('/home/new')
      this.newGoodList = res.data.result   
    },
    // 人气推荐
    async getHotList() {
        const res = await request.get<ApiRes<HotGoods[]>>('/home/hot')
        this.hotGoodList = res.data.result
    },
    // 热门品牌
    async getBrandList() {
      const res = await request.get<ApiRes<Brand[]>>('/home/brand')
      console.log(res)
      this.brandList = res.data.result
    },
    //生鲜
    async getProductList() {
      const res = await request.get<ApiRes<HomeProduct[]>>('/home/goods')
      this.productList = res.data.result
    },
     // 最新专题
    async getSpecialList() {
      const res = await request.get<ApiRes<Special[]>>('/home/special')
      this.specialList = res.data.result
    },
  },
 
  
})

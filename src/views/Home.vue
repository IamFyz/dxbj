<template>
  <div class="home">
    <h3 class="home-title">大信杉江</h3>
    <header-swiper/>
    <search/>
    <menu-nav/>
    <div class="wrap">
    <group-title :title="title1"></group-title>
    <product-category/>
    <group-title :title="title2"></group-title>
    <industry-information/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSwiper from '@/components/home/HeaderSwiper.vue'
import Search from '@/components/home/Search.vue'
import MenuNav from '@/components/home/MenuNav.vue'
import ProductCategory from '@/components/home/ProductCategory.vue'
import IndustryInformation from '@/components/home/IndustryInformation.vue'
import GroupTitle from '@/components/home/GroupTitle.vue'

export default {
  name: 'home',
  components: {
    HeaderSwiper,
    Search,
    MenuNav,
    ProductCategory,
    IndustryInformation,
    GroupTitle,
  },
  data() {
    return {
      title1: {
        titleName: '产品分类',
        titleImg: require('../assets/img/C-1.png'),
        titlePath: '/products'
      },
      title2: {
        titleName: '行业资讯',
        titleImg: require('../assets/img/C-2.png'),
        titlePath: '/infomation'
      }
    }
  },
}
</script>
<style scoped lang="less">
.home-title {
  font-family: KaiTi;
  text-align: center;
}
</style>

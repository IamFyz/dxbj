<template>
 <div class="menu-nav">
   <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item link="/AboutUs" label="关于我们">
        <img slot="icon" src="../../assets/img/nav-1.jpg">
      </grid-item>
      <grid-item link="/products" label="公司产品">
        <img slot="icon" src="../../assets/img/nav-2.jpg">
      </grid-item>
      <grid-item link="/infomation" label="行业资讯">
        <img slot="icon" src="../../assets/img/nav-3.jpg">
      </grid-item>
      <grid-item link="/contact" label="联系方式">
        <img slot="icon" src="../../assets/img/nav-4.jpg">
      </grid-item>
    </grid>
 </div>
</template>

<script>
import { Grid, GridItem } from 'vux'
 export default {
   data () {
     return {

     }
   },
   components: {
     Grid,
     GridItem
   }
 }
</script>

<style lang="less">
.menu-nav .weui-grid__icon{
  width: 40px;
  height: 40px;
}
.menu-nav .weui-grid__label {
  font-size: 12px;
  text-decoration: none;
}
</style>

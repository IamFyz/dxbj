<template>
 <div class="products">
    <flexbox v-for="i of productListData.length" :key="i">
      <flexbox-item v-for="(item) in productListData[i-1]" :key="item.imgName">
        <router-link :to="{path:'/productsDetail',query:{imgPath: item.imgName,productName: item.productName}}" tag="p"><img :src="item.imgName" alt=""></router-link>
        <router-link :to="{path:'/productsDetail',query:{imgPath: item.imgName,productName: item.productName}}" tag="p">{{item.productName}}</router-link>
      </flexbox-item>
    </flexbox>
 </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
 export default {
   data () {
     return {
       productListData: [
         [
          {imgName:require('../../assets/img/product-1.jpg'), productName:'客厅'},
          {imgName:require('../../assets/img/product-2.jpg'), productName:'卧室'},
         ],
         [
          {imgName:require('../../assets/img/product-3.jpg'), productName:'皇宫椅三件套'},
          {imgName:require('../../assets/img/product-4.jpg'), productName:'椅子'},
         ],
         [
          {imgName:require('../../assets/img/product-5.jpg'), productName:'桌子'},
          {imgName:require('../../assets/img/product-6.jpg'), productName:'办公桌'},
         ]
        ]
     }
   },
   components: {
     Flexbox,
     FlexboxItem,
   }
 }
</script>

<style scoped lang="less">
.products p img {
  width: 100%;
  height: 90px;
}
.products p {
  text-align: center;
  margin: 0;
}
.products .vux-flexbox {
  margin-bottom: 10px;
}
</style>

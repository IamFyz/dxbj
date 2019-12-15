<template>
 <div class="product-cate">
   <ul>
     <li>客厅类</li>|
     <li>餐厅类</li>|
     <li>卧室类</li>
   </ul>
   <ul>
     <li>办公类</li>|
     <li>大板</li>|
     <li>小件类</li>
   </ul>
   <ul>
     <li>桌类</li>|
     <li>柜类</li>|
     <li></li>
   </ul>
 </div>
</template>

<script>
import { Grid, GridItem } from 'vux'
 export default {
   data () {
     return {
       Grid,
       GridItem
     }
   },
   components: {

   }
 }
</script>

<style scoped lang="less">
.product-cate {
  ul {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 10px 0;
    li {
      width: 33%;
      font-size: 14px;
      color: #424242;
      text-align: center;
    }
  }
}
 
</style>

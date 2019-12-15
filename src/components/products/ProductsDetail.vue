<template>
 <div>
   <div class="bannner">
     <img :src="productImg" alt="">
     <div>
       <div class="recommend">
         <img src="../../assets/img/share.png" alt="">
         <span>推荐</span>
       </div>
     </div>
     <h5>{{productName}}</h5>
   </div>
   <div class="fenge"></div>
   <div class="relevant-product">
     <h5>相关产品</h5>
     <ul>
       <li class="list-col" v-for="i in 2" :key="i">
         <div class="imgWarp">
           <img :src="productImg" alt="" ref="imgSize">
           <span>{{productName}}</span>
         </div>
         <div class="imgWarp" style="margin: 0 10px;">
           <img :src="productImg" alt="" ref="imgSize">
           <span>{{productName}}</span>
         </div>
         <div class="imgWarp">
           <img :src="productImg" alt="" ref="imgSize">
           <span>{{productName}}</span>
         </div>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       productImg: '',
       productName:''
     }
   },
   components: {

   },
   created() {
     this.productImg = this.$route.query.imgPath
     this.productName = this.$route.query.productName
   },
   mounted() {

   },
 }
</script>

<style scoped lang="less">
.bannner {
  img {
    width:100%;
  }
  h5 {
    padding: 0 10px;
  }
  .recommend {
    float: right;
    padding: 0 10px;
    font-size: 10px;
    border-left: 1px solid #ccc;
    img {
      width: 20px;
      display: block;
    }
  }
}
.relevant-product {
  padding: 0 10px;
  font-size: 12px;
  h5 {
    margin: 10px 0;
  }
  .imgWarp {
    width: 33%;
    img {
      width: 100%;
      height: 93px;
      border-radius: 5px;
    }
  }
}
.fenge {
  height: 5px;
  background-color: #ccc;
}
.list-col {
  display: flex;
  margin-bottom: 20px;
}
 
</style>

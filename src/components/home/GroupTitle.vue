<template>
 <div style="height: 40px;">
   <div class="group-title-img">
    <img src="../../assets/img/C.png" alt="" style="width: 50px;">
    <div style="position: absolute; left: 13px; top: 7px;">
      <img :src="title.titleImg" alt="" style="width: 15px; vertical-align:-1px;">
      <span>{{title.titleName}}</span>
    </div>
    <router-link :to="title.titlePath" style="float: right; font-size:14px;line-height: 40px;">更多</router-link>
   </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   },
   props: {
     title: {
       type: Object
     }
   },
   mounted() {
     
   },
 }
</script>

<style lang="less">
.group-title-img {
  position: relative;
  span {
    color: #e21717;
  }
}
 
</style>

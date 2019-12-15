<template>
 <div>
   <swiper 
   :list="baseList" 
   dots-position="center" 
   auto
   :aspect-ratio="400/800"
   ></swiper>
 </div>
</template>

<script>
import { Swiper,XHeader } from 'vux'
 export default {
   data () {
     return {
       baseList:[
      {
        url: 'javascript:',
        img: 'http://aimg8.dlszyht.net.cn/ev_user_module_content_tmp/2018_11_16/tmp1542350933_1793097_s.jpg',
      }, 
      {
        url: 'javascript:',
        img: 'http://aimg8.dlszyht.net.cn/ev_user_module_content_tmp/2018_11_16/tmp1542356665_1793097_s.jpg',
      }]
     }
   },
   components: {
     Swiper
   }
 }
</script>

<style scoped lang="less">

</style>

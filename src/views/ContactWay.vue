<template>
 <div class="contact">
   <x-header :left-options="{backText: ''}">联系我们</x-header>
   <search/>
   <header-swiper/>
   <div class="contact-title">
     <div style="position: relative; margin: 0 auto; width: 100px;">
       <img src="../assets/img/C.png" alt="" style="width: 50px;">
       <div style="position: absolute; left: 13px; top: 7px;">
        <img src="../assets/img/phone.png" alt="" style="width: 15px; vertical-align:-1px;">
        <span style="color: #e21717;">联系我们</span>
       </div>
      </div>
    </div>
    <div class="company-adress">
      <p>
        <img src="../assets/img/adress.png" alt="" style="width:40px;">
      </p>
      <p style="font-weight: bold; margin-bottom: 5px;">公司地址</p>
      <p style="font-size: 14px;">江苏张家港市金港镇南沙三甲里路21号</p>
    </div>
    <div class="contact-phone">
      <flexbox>
      <flexbox-item style="border-right: 1px dashed #eee;">
        <p style="margin-bottom: 10px">
        <img src="../assets/img/lianxi.jpg" alt="" style="width:40px;">
        </p>
        <p style="font-weight: bold; margin-bottom: 5px;">联系热线</p>
        <p style="font-size: 14px;color: #e21717">1530-624-2010</p>
      </flexbox-item>
      <flexbox-item>
        <p style="margin-bottom: 10px">
        <img src="../assets/img/rexian.jpg" alt="" style="width:40px;">
        </p>
        <p style="font-weight: bold; margin-bottom: 5px;">固话热线</p>
        <p style="font-size: 14px;color: #e21717">0512-55373606</p>
      </flexbox-item>
    </flexbox>
    </div>
 </div>
</template>

<script>
import { XHeader, Flexbox, FlexboxItem } from 'vux'
import Search from '@/components/home/Search.vue'
import HeaderSwiper from '@/components/home/HeaderSwiper.vue'
 export default {
   data () {
     return {

     }
   },
   components: {
     XHeader,
     Search,
     HeaderSwiper,
     Flexbox,
     FlexboxItem
   }
 }
</script>

<style lang="less">
.contact-title,
.company-adress,
.contact-phone {
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}
.company-adress p,
.contact-phone p {
  text-align: center;
  margin: 0;
}
.contact-phone {
  border-bottom: 1px dashed #eee;
}
.contact {
  .vux-header {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    .vux-header-title {
      color: #424242;
      font-size: 14px;
    }
  }
}
</style>

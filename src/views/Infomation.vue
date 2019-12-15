<template>
 <div class="infomation">
   <x-header title="slot:overwrite-title" :left-options="{backText: ''}">
      <div slot="right">
        <router-link to="/" style="margin-left: 20px;"><img src="../assets/img/user.png" alt=""></router-link>
      </div>
    </x-header>
    <header-swiper/>
    <p style="text-align:center;">新闻资讯</p>
    <div v-for="i in 20" :key="i" style="background-color: #eee; padding: 5px 0 0;">
      <router-link to="/question" tag="p" style="padding: 10px; margin: 0;background-color: #fff;">黑酸枝与缅甸花梨哪个好些?</router-link>
    </div>
 </div>
</template>

<script>
import { XHeader, Search } from 'vux'
import HeaderSwiper from '@/components/home/HeaderSwiper.vue'
 export default {
   data () {
     return {

     }
   },
   components: {
     XHeader,
     Search,
     HeaderSwiper
   }
 }
</script>

<style lang="less">
.infomation {
  font-size: 14px;
  .vux-header {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    .vux-header-title-area {
      margin-left: 35px;
    }
    .vux-header-right {
      width: 50px;
      a {
        img {
          width: 20px;
        }
      }
    }
  }
}
 
</style>

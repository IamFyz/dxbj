<template>
 <div class="search-header">
   <x-header title="slot:overwrite-title" :left-options="{backText: ''}">
      <div class="search-title" slot="overwrite-title">
        <search
      v-model="value"
      placeholder="请输入你要搜索的内容"
      ref="search"></search>
      </div>
      <div slot="right">
        <router-link to="/" style="margin-right: 10px; margin-left: -10px;"><img src="../../assets/img/user.png" alt=""></router-link>
        <router-link to="/"><img src="../../assets/img/home.png" alt=""></router-link>
      </div>
      
    </x-header>
 </div>
</template>

<script>
import { XHeader, Search } from 'vux'
 export default {
   data () {
     return {
       value: ''
     }
   },
   components: {
     XHeader,
     Search
   }
 }
</script>

<style lang="less">
.search-header {
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

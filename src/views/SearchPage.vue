<template>
 <div style="height: 100%">
   <search
      v-model="value"
      placeholder="请输入关键词"
      @on-focus="onFocus"
      ref="search"></search>
    <div style="text-align: center; padding: 30px 0;height: 100%">
      <img src="../assets/img/not-found.jpg" alt="" style="width: 100px; margin-top: 100px;">
      <p style="color: #ccc">未找到相关内容</p>
    </div>
 </div>
</template>

<script>
import { Search, ToastPlugin } from 'vux'
import Vue from 'vue'
Vue.use(ToastPlugin)
 export default {
   data () {
     return {
       value: '',
     }
   },
   components: {
     Search
   },
   methods: {
     onFocus() {
       this.$vux.toast.show({
          text: '防欺诈盗号，请勿输入支付或qq密码',
          type: 'warn',
          position: 'middle',
          time: 2000,
          width: '100%'
      })
     }
   },
 }
</script>

<style scoped lang="less">

 
</style>

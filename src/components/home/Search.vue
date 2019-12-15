<template>
 <div class="search">
      <x-input placeholder="请输入关键词" class="weui-vcode">
        <x-button slot="right" type="warn" mini @click.native="toSearchPage"><icon type="search" style="margin-left: -5px;color: #fff;"></icon></x-button>
      </x-input>
 </div>
</template>

<script>
import { XInput, Icon, Group, XButton } from 'vux'
 export default {
   data () {
     return {

     }
   },
   components: {
     XInput,
     Icon,
     Group,
     XButton
   },
   methods: {
     toSearchPage() {
       console.log(1)
       this.$router.push({ name: 'searchPage', params: { userId: 123 }})
     }
   },
 }
</script>

<style lang="less">
.search {
  background-color: #eee;
}
.search .weui-btn_mini {
  line-height: 1.5;
}
.search .weui-input {
  background-color: #fff;
  font-size: 12px;
}
 
</style>

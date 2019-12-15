<template>
 <div class="leave-msg">
   <x-header>在线留言</x-header>
   <div class="msg-wrap">
   <group>
     <x-input v-model="msgTitle" placeholder="留言标题" type="text" />
     <x-input v-model="userName" placeholder="您的姓名" type="text" />
     <x-input v-model="phoneNumber" placeholder="电话或手机" type="text" />
     <x-textarea v-model="message" placeholder="留言内容"></x-textarea>
     <x-button type="warn">提交</x-button>
   </group>
   </div>
 </div>
</template>

<script>
import { XHeader, XInput, Group, XButton, XTextarea } from 'vux'
 export default {
   data () {
     return {
       msgTitle: '',
       userName: '',
       phoneNumber: '',
       message: ''
     }
   },
   components: {
     XHeader,
     XInput,
     Group,
     XButton,
     XTextarea,
   }
 }
</script>

<style lang="less">
.leave-msg {
  .msg-wrap {
  margin: 20px;
  .weui-cell {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 20px;
  }
  .weui-cells {
    font-size: 14px;
  }
}
}

 
</style>

<template>
 <div class="home-tabbar">
   <tabbar style="position: fixed;">
      <tabbar-item selected link="/">
        <img slot="icon" src="../../assets/img/shouyeshouye.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item @on-item-click="dialing">
        <img slot="icon" src="../../assets/img/dianhua.png">
        <span slot="label">电话</span>
      </tabbar-item>
      <tabbar-item link="/message">
        <img slot="icon" src="../../assets/img/msg-o.png">
        <span slot="label">留言</span>
      </tabbar-item>
      <tabbar-item link="https://3gimg.qq.com/lightmap/v1/marker/index.html?type=0&marker=coord%3A39.915%2C116.404%3Btitle%3A%E5%A4%A7%E4%BF%A1%E6%9D%89%E6%B1%9F%3Baddr%3A%E5%A4%A7%E4%BF%A1%E6%9D%89%E6%B1%9F&key=5JQBZ-H6PRU-H33VV-4B4JR-ZNUIE-HEBRZ&referer=myapp">
        <img slot="icon" src="../../assets/img/weizhi.png">
        <span slot="label">位置</span>
      </tabbar-item>
    </tabbar>
 </div>
</template>

<script>
import { Tabbar, TabbarItem, ConfirmPlugin } from 'vux'
import Vue from 'vue'
Vue.use(ConfirmPlugin)
 export default {
   data () {
     return {

     }
   },
   components: {
     Tabbar,
     TabbarItem,
   },
   methods: {
     dialing() {
       this.$vux.confirm.show({
        title: '提示',
        content: '确定拨打电话: 1530-624-2010 吗？',
        onConfirm () {
          window.location.href = 'tel://1530-624-2010'
        }
      })
     }
   },
 }
</script>

<style lang="less">
.home-tabbar p {
  margin: 2px 0;
}
 
</style>

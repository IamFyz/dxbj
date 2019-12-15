<template>
  <div id="app">
    <router-view/>
    <home-tabbar/>
    <my-footer/>
  </div>
</template>
<script>
import HomeTabbar from '@/components/home/HomeTabbar.vue'
import MyFooter from '@/components/home/Footer.vue'
export default {
   data () {
     return {

     }
   },
   components: {
     HomeTabbar,
     MyFooter
   }
 }
</script>
<style>
a {
  text-decoration: none;
  color: #424242;
}
html,body,#app{
  height:100%;
  margin:0;
  padding:0;
}
</style>

<template>
 <div class="about-us">
   <x-header :left-options="{backText: ''}">关于我们</x-header>
   <search/>
   <header-swiper/>
   <div class="wrap">
    <p>张家港市大信杉江木制品有限公司，是一家集红木家具设计、开发、生产、销售、室内装修服务于一体的红木家具企业。本公司位于进口木材集散地，卫生城市、环境保护模范城市-江苏张家港市.取材优势明显，这里拥有深水良港，东近上海西接南京，交通便利,经济发达。</p>
    <p>本公司自创办以来，始终秉承“诚信为本，精益求精”的企业理念，  致力于打造专业的红木文化企业。经过多年的持续发展，积累了雄厚的红木家具研发、生产、管理经验，拥有一批具有专业技能， 高素质的员工，及国内外先进的专业家具生产设备。</p>
    <p>以进口大红酸枝、黑酸枝、大果紫檀、乌木、非洲小叶紫檀、巴花、缅甸花梨、紫罗兰、黄金樟、鸡翅木等名贵红木硬木，再经过挑选纹理图案漂亮，色泽光润的原材料，采用先进的电子蒸汽木材烘干技术，运用公司特有的干燥、防腐、防裂等材料处理措施，经传统加工，雕刻工艺，精工雕琢，实现了传统工艺与现代艺术的结合。</p>
    <p>公司现有办公、客厅、餐厅、书房、卧室、新口中式红木家具、巴花大板等系列红木产品，公司生产的每一件家具都经得起岁月的考验，承载着中国木文化的使命，每一件成品的问世，都值得我们用心体会，将这段岁月经典珍藏，相信您收获的不止是清新和雅致，更是一段旷世的经典传奇。</p>
   </div>
 </div>
</template>

<script>
import { XHeader } from 'vux'
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
   }
 }
</script>

<style lang="less">
.about-us {
  .vux-header {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    .vux-header-title {
      color: #424242;
      font-size: 14px;
    }
  }
  .wrap p {
    font-size: 12px;
    line-height: 20px;
  }
}
 
</style>

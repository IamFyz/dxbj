<template>
 <div class="panel">
   <panel 
    :list="list"
    @on-click-item="toQusetionPage"
    >
    </panel>
 </div>
</template>

<script>
import { Panel } from 'vux'
 export default {
   data () {
     return {
       list: [
        {
          src: require('../../assets/img/noPicture.jpg'),
          title: '黑酸枝与缅甸花梨哪个好些',
          desc: '当然是缅甸花梨了!只是问白面粉和玉米粉哪个更好?人们必须认为白面粉是好的，可以做蛋糕，也可以做面包。但是对于猪来说，只要您能填饱肚子，情况可能是一样的。',
        },
        {
          src: require('../../assets/img/noPicture.jpg'),
          title: '金丝楠木和黄金樟二者之间的区别',
          desc: '金丝楠的颜色多为浅黄、橙黄色，有时掺杂有灰色，纹理清晰，淡雅文静，质地温润柔和，无收缩的纹理是很明显的平行纹理，类似年轮纹，这是楠木弦切面和径切面的典型特征。',
        },
        {
          src: require('../../assets/img/noPicture.jpg'),
          title: '乌木的作用体现在什么地方',
          desc: '乌木又称阴沉木，类同于植物化石，是树木经地震、风暴等情况下，埋入地下在高温、高压的环境下，形成的一种碳化后的木材，由于数量稀少、质地坚硬，目前的市场价值很高，多作为装饰、家具、手工艺品材料使用，也可入药',
        },
        {
          src: require('../../assets/img/noPicture.jpg'),
          title: '为何红木家具的价格差距如此之大',
          desc: '红木家具的第一步就是从木材开始的，开板的时候就要选择无虫蛀，无白皮的芯材做为原料，而很多红木原材其芯材的占比并不高，如果全部弃用白皮，成本就陡然上升。例如海南黄花梨这样的材质',
        },
        {
          src: require('../../assets/img/noPicture.jpg'),
          title: '沉香的香气一般能持续多久呢',
          desc: '沉香的香气在常温下不是很明显。即使这样，鼻子也很靠近，您仍然可以闻到优雅的韵律。时间长了，它会逐渐消失，您不禁为长期担忧。',
        },
      ],
     }
   },
   components: {
     Panel
   },
   methods: {
     toQusetionPage(){
       this.$router.push('/question')
     }
   },
 }
</script>

<style lang="less">
.panel .weui-media-box__title{
  margin: 0 0 5px;
  font-size: 14px;
}
.weui-media-box__desc {
  margin: 5px 0;
  text-indent: 2em;
}
.panel .weui-media-box {
  padding: 10px 0;
}
 
</style>

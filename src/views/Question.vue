<template>
 <div class="question">
      <x-header title="slot:overwrite-title" :left-options="{backText: ''}">
      <div slot="right">
        <router-link to="/" style="margin-left: 20px;"><img src="../assets/img/收藏.png" alt=""></router-link>
      </div>
    </x-header>
    <div class="qText">
      <h3>黑酸枝与缅甸花梨哪个好些？</h3>
      <p>当然是缅甸花梨了!只是问白面粉和玉米粉哪个更好?人们必须认为白面粉是好的，可以做蛋糕，也可以做面包。但是对于猪来说，只要您能填饱肚子，情况可能是一样的。</p>
      <p>1，家具分级</p>
      <p>中国家具是一个档次，最高水平是拜神。在某些庙宇中，厅堂中的家具不仅受到县城最著名的木匠的尊重，还受到众神和天上大师的尊重。要建造，木材必须能够使用优质材料。</p>
      <p>中国家具的第二层是尊重文化。儿童阅览桌和学者写作的复杂性，包括去北京参加考试的书箱，将由该村著名的木匠制作。中国家具的第三层是供个人使用。桌子和椅子是独立的，可以使用。</p>
      <p>如果您在厨房里有一个小凳子，坐在火上，请使用与缅甸花相同的黑色紫檀木，砖块也不错。但是要申请到寺庙上方必须使用缅甸花，它属于桃花心木，黑酸枝木是著名的砖头。</p>
      <p>黑色紫檀木的价格与缅甸的价格相差很多倍，无论如何都无法区分两者。</p>
      <p>2、家具是有路份的</p>
      <p>缅花家具在明朝就出现了，历史上有过很多的贵重家具是用缅花制作的。它不但材质好，花纹、颜色、鬃眼也受人喜爱。所以历史上经常用缅花制作高路份的家具，就是敬神的家具或者是文人用的家具。</p>
      <p>民国以前黄花梨与缅甸花梨统称为“花梨”，后来才分出来的黄花梨和草花梨，草花梨就是缅花。</p>
      <p>黑酸枝又称印尼黑酸枝，是近几年才进口的木材，大量用于制作中式沙发，也就是制作实用类家具，在历史上既没有祭拜过各路神仙，又没有伺候过哪位文人。只适用于制作桌椅板凳而已，所以路份低。</p>
      <p>印尼黑酸枝木质比缅花的木质软，如果做成同样的椅子，黑酸枝的用个三年两载没问题，草花梨可以用个上百年。这就是硬木结实经得起时间的磨合，软木买的时候便宜，但是过几年就需要更换。</p>
      <p>以上就是为大家介绍的全部内容，希望对大家有所帮助。如果您想要了解更多的知识，您可以浏览我们的网站，我们会为您提供更专业的信息。</p>
    </div>
    <div style="backgroundColor:#ccc;height:5px;"></div>
    <divider>推荐</divider>
    <p class="share-img">
      <img src="../assets/img/share1.jpg" alt="">
      <img src="../assets/img/share2.jpg" alt="">
    </p>
    <p class="btn">
      <flexbox gutter="50">
        <flexbox-item>
          <x-button type="default">上一页</x-button>
        </flexbox-item>
        <flexbox-item >
          <x-button type="default" style="float:right;">下一页</x-button>
        </flexbox-item>
      </flexbox>
    </p>
 </div>
</template>

<script>
import { XHeader,Divider,Flexbox, FlexboxItem,XButton  } from 'vux'
 export default {
   data () {
     return {

     }
   },
   components: {
     XHeader,
     Divider,
     Flexbox,
     FlexboxItem,
     XButton
   }
 }
</script>

<style scoped lang="less">
.question {
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
.qText {
  padding: 0 10px;
  p {
    text-indent: 2em;
  }
}
.share-img {
  text-align: center;
  img {
    width: 50px;
    margin: 0 10px;
  }
}
.btn {
  padding: 0 10px;
  .x-button {
    height: 20px;
  }
}
 
</style>

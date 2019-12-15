<template>
 <div>
   <search-header/>
   <products-category/>
   <product-category/>
   <product-category/>
 </div>
</template>

<script>
import { XHeader } from 'vux'
import SearchHeader from '@/components/products/SearchHeader.vue'
import ProductsCategory from '@/components/products/ProductsCategory.vue'
import ProductsList from '@/components/products/ProductsList.vue'
import ProductCategory from '@/components/home/ProductCategory.vue'
 export default {
   data () {
     return {

     }
   },
   components: {
     SearchHeader,
     ProductsCategory,
     ProductsList,
     ProductCategory
   }
 }
</script>

<style scoped lang="less">

 
</style>

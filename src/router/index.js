import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Message from '../views/LeaveMessage.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactWay from '../views/ContactWay.vue'
import Infomation from '../views/Infomation.vue'
import Products from '../views/Products.vue'
import SearchPapge from '../views/SearchPage.vue'
import ProductsDetail from '../components/products/ProductsDetail.vue'
import Question from '../views/Question.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/message',
    name: 'message',
    component: Message
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: AboutUs
  },
  {
    path: '/contact',
    name: 'contactWay',
    component: ContactWay
  },
  {
    path: '/infomation',
    name: 'infomation',
    component: Infomation
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/searchPage',
    name: 'searchPage',
    component: SearchPapge
  },
  {
    path: '/productsDetail',
    name: 'productsDetail',
    component: ProductsDetail
  },
  {
    path: '/question',
    name: 'question',
    component: Question
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

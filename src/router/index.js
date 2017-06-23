import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Product from '../pages/product/Product'
import Example from '../pages/example/Example.vue'
import Price from '../pages/price/Price'
import Download from '../pages/download/Download'
import Support from '../pages/support/Support.vue'
import Logs from '../pages/support/Logs'
import File from '../pages/support/File'

Vue.use ( Router )
export default new Router ( {
  mode: 'history',//去除 #  vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。
                 //如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
  routes : [
    {
      path : '/' ,
      name : '首页' ,
      hidden : false ,
      leaf : true ,
      component : Home ,
    } ,
    {
      path : '/product' ,
      name : '产品' ,
      hidden : false ,
      leaf : true ,
      component : Product
    } ,
    {
      path : '/example' ,
      name : '案例' ,
      hidden : false ,
      leaf : true ,
      component : Example
    } ,
    {
      path : '/price' ,
      name : '价格' ,
      hidden : true ,
      leaf : true ,
      component : Price
    } ,
    {
      path : '/download' ,
      /*name : '下载' ,*/
      name : '简介' ,
      hidden : false ,
      leaf : true ,
      component : Download
    } , {
      path : '/' ,
      name : '支持' ,
      hidden : true ,
      leaf : false ,
      component : Support ,
      children : [
        {
          path : '/logs' ,
          name : '更新日志' ,
          hidden : false ,
          component : Logs
        } , {
          path : "/file" ,
          name : "开发者文档" ,
          hidden : false ,
          component : File
        }
      ]
    }
  ]
} )


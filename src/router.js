import VueRouter from 'vue-router'

// 导入对应的路由组件
import Home from './components/Home.vue'
import Member from './components/Member.vue'
import Search from './components/Search.vue'
import ShoppingCart from './components/ShoppingCart.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [ // 配置路由规则
    // { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/member', component: Member },
    { path: '/shoppingcart', component: ShoppingCart },
    { path: '/search', component: Search }
   
   
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router
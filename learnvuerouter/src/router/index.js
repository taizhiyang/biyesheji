import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import About from '../components/About'

//1.通过Vue.use(插件)，安装插件
Vue.use(Router)

//2.创建Router对象
const routes=[
  {
    path:'',
    //redirect重定向
    redirect:'/home'

  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/about',
    component:About
  }
]
const router=new Router({
  //配置路由和组件之间的应用关系
  routes,
  mode:'history', //为了在url中显示的不是哈希值（#）而是history
  linkActiveClass:'active'  //为了对所有router-link中active-class属性的修改
})
//3.将router对象传入到vue实例
export default router

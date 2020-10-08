//1 导入vue-路由
import VueRouter from 'vue-router'
//2.导入Vue
import Vue from 'vue'
// 解决重复location.push()报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

//3.路由懒加载
const Home = () => import('../views/home/Home')
const Login = () => import('../views/login/Login')

const route = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  }
]



const router = new VueRouter({
  routes: route,
  mode: 'history'
})

export default router









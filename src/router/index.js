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
const UserManager =() => import('../views/usermanager/UserManager')
const DoctorManager =() => import('../views/doctor/DoctorManager')
const DoctorList =() => import('../views/doctor/doctorlist/DoctorList')
const DocotorService = () => import('../views/doctor/doctorlist/DoctorService')
const DocotorServiceReview = () => import('../views/doctor/doctorlist/DoctorServiceReview')
const PrescriptionManagent = () => import('../views/prescription/PrescriptionManagent')
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
  },
  {
    path: '/usermanager',
    component: UserManager
  },
  {
    path: '/doctormanager',
    component: DoctorManager
  },
  {
    path: '/doctorlist',
    component: DoctorList
  },
  {
    path: '/doctorservice',
    component: DocotorService
  },
  {
    path: '/doctorservicereview',
    component: DocotorServiceReview
  },
  {
    path: '/prescription',
    component: PrescriptionManagent
  }
]



const router = new VueRouter({
  routes: route,
  mode: 'history'
})

export default router









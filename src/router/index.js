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
const Home = () => import('../views/home/Home');
const Login = () => import('../views/login/Login');
const UserManager =() => import('../views/usermanager/UserManager');
const DoctorManager =() => import('../views/doctor/DoctorManager');
const DoctorList =() => import('../views/doctor/doctorlist/DoctorList');
const DocotorService = () => import('../views/doctor/doctorlist/DoctorService');
const DocotorServiceReview = () => import('../views/doctor/doctorlist/DoctorServiceReview');
const PrescriptionManagent = () => import('../views/prescription/PrescriptionManagent');
const OrdsQuestionnaire = () => import('../views/ords/Questionnaire');
const Registeredorder = () => import('../views/registeredorder/Registeredorder');
const DrugOrderManagement = () => import('../views/drugordermanagement/DrugOrderManagement');
const PrescriptionCirculationOrderManagement = () => import('../views/prescriptioncirculationOrderManagement/PrescriptionCirculationOrderManagement');
const Refund =() => import('../views/refund/Refund');
const TransactionRecord = () => import('../views/transactionrecord/TransactionRecord');
const SettlementRecord = ()=> import('../views/settlementrecord/SettlementRecord');
const TransferRecords = ()=> import('../views/transferRecords/TransferRecords');
const DrugList = ()=> import('../views/druglist/DrugList');
const DrugClassification = () => import('../views/drugclassification/DrugClassification');
const DrugReview = () => import('../views/drugreview/DrugReview');
const MemberManagment = () => import('../views/memberManagment/MemberManagment');
const RoleManagment = () => import('../views/roleManagment/RoleManagment');
const Suggestion = () => import('../views/suggestion/Suggestion');

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
  },
  {
    path: '/questionnaire',
    component: OrdsQuestionnaire
  },
  {
    path: '/registeredorder',
    component: Registeredorder
  },
  {
    path: '/drugordermanagement',
    component: DrugOrderManagement
  },
  {
    path: '/prescriptionCirculationOrderManagement',
    component: PrescriptionCirculationOrderManagement
  },
  {
    path: '/refund',
    component: Refund
  },
  {
    path: '/transactionrecord',
    component: TransactionRecord
  },
  {
    path: '/settlementrecord',
    component: SettlementRecord
  },
  {
    path: '/transferRecords',
    component: TransferRecords
  },
  {
    path: '/druglist',
    component: DrugList
  },
  {
    path: '/drugclassification',
    component: DrugClassification
  },
  {
    path: '/drugReview',
    component: DrugReview
  },
  {
    path: '/memberManagment',
    component: MemberManagment
  },
  {
    path: '/roleManagment',
    component: RoleManagment
  },
  {
    path: '/suggestion',
    component: Suggestion
  }
]



const router = new VueRouter({
  routes: route,
  mode: 'history'
})

export default router









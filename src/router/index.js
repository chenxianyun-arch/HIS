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
const ForgetPwd = () => import('../views/forgetpwd/ForgetPwd');
const Register = () => import('../views/register/Register');
const UserDetailInfo = () => import('../views/usermanager/UserDetailInfo');
const UserGoodsInfo = () => import('../views/usermanager/UserGoodsInfo');
const DoctorDetailInfo = () => import('../views/doctor/doctordetail/DoctorDetailInfo');
const DoctorFansInfo = () => import('../views/doctor/doctordetail/DoctorFansInfo');
const DoctorWaitShenhe = () => import('../views/doctor/doctorshenhe/DoctorWaitShenhe');
const DoctorServiceShenhe = () => import('../views/doctor/doctorshenhe/DoctorServiceShenhe');
const PrescriptionInfo = () => import('../views/prescription/prescriptioninfo/PrescriptionInfo');
const QuestionnaireTips = () => import('../views/ords/questionnairetips/QuestionnaireTips');
const RegisterDetaillInfo = () => import('../views/registeredorder/registerorderinfo/RegisterDetaillInfo');
const DrugOrderDetailInfo = () => import('../views/drugordermanagement/DrugOrderDetailInfo/DrugOrderDetailInfo');
const RefundDetailInfo = () => import('../views/refund/RefundDetailInfo');
const SettlementRecordInfo = () => import('../views/settlementrecord/SettlementRecordInfo');
const DrugListInfo = () => import('../views/druglist/DrugListInfo');
const DrugListBianji = () => import('../views/druglist/DrugListBianji');
const DrugClassificationInfo = () => import('../views/drugclassification/drugclassifications/DrugClassificationInfo');
const DrugReviewInfo = () => import('../views/drugreview/drugreviews/DrugReviewInfo');
const DrugShenheInfo = () => import('../views/drugreview/drugreviews/DrugShenheInfo');
const MemberInfo = () => import('../views/memberManagment/memeberinfo/MemberInfo');
const MemberAdd = () => import('../views/memberManagment/memeberinfo/MemberAdd');


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
  },
  {
    path: '/forgetpwd',
    component: ForgetPwd
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/userdetailinfo',
    component: UserDetailInfo
  },
  {
    path: '/usergoodsinfo',
    component: UserGoodsInfo
  },
  {
    path: '/doctordetailinfo',
    component: DoctorDetailInfo
  },
  {
    path: '/doctorfansinfo',
    component: DoctorFansInfo
  },
  {
    path: '/doctorwaitshenhe',
    component: DoctorWaitShenhe
  },
  {
    path: '/doctorServiceShenhe',
    component: DoctorServiceShenhe
  },
  {
    path: '/prescriptioninfo',
    component: PrescriptionInfo
  },
  {
    path: '/questionnairetips',
    component: QuestionnaireTips
  },
  {
    path: '/registerdetaillinfo',
    component: RegisterDetaillInfo
  },
  {
    path: '/drugOrderdetailinfo',
    component: DrugOrderDetailInfo
  },
  {
    path: '/refunddetailinfo',
    component: RefundDetailInfo
  },
  {
    path: '/settlementrecordinfo',
    component: SettlementRecordInfo
  },
  {
    path: '/druglistinfo',
    component: DrugListInfo
  },
  {
    path: '/druglistbianji',
    component: DrugListBianji
  },
  {
    path: '/drugclassificationInfo',
    component: DrugClassificationInfo
  },
  {
    path: '/drugreviewinfo',
    component: DrugReviewInfo
  },
  {
    path: '/drugshenheinfo',
    component: DrugShenheInfo
  },
  {
    path: '/memberinfo',
    component: MemberInfo
  },
  {
    path: '/memberadd',
    component: MemberAdd
  }
]

const router = new VueRouter({
  routes: route,
  mode: 'history'
})

export default router









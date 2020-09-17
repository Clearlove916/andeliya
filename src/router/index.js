import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
 if (onResolve || onReject) return originalPush.call(this, location, onResolve,
onReject)
 return originalPush.call(this, location).catch(err => err)
}

const Home =() => import('views/home/Home.vue')
const Classification =()=> import('views/classification/Classifacation.vue')
const ShopCar =()=> import('views/shopCar/ShopCar.vue')
const My =()=> import('views/my/My.vue')
const Detail =()=> import('views/detail/Detail.vue')
const Order =()=> import('views/order/Order.vue')
const Login =()=> import('views/login/Login.vue')
const Register =()=> import('views/register/Register.vue')
const Payment =()=> import('views/payment/Payment.vue')
const Address =()=> import('views/shippingAddress/SpAddress.vue')
const SelectShop =()=> import('views/selectShop/SelectShop.vue')

const routes=[
  {
    path:'/',
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home,
    meta:{title:'首页',}
  },
  {
    path:'/classification',
    component:Classification,
    meta:{title:'分类',}
  },
  {
    path:'/shopcar',
    component:ShopCar,
    meta:{title:'购物车',verification:true},
  },
  {
    path:'/user/my',
    name:'my',
    component:My,
    meta:{title:'用户',verification:true}
  },
  {
    path:'/good/detail',
    name:'detail',
    component:Detail,
    meta:{title:'商品详情',}
  },
  {
    path:'/user/order',
    name:'order',
    component:Order,
    meta:{title:'我的订单',verification:true}
  },
  {
    path:'/login',
    name:'login',
    component:Login,
    meta:{title:'登录',},
    // beforeEnter: (to, from, next) => {
    //   if (Object.keys(to.params).length === 0)
    //   to.params.path = from.path
    //   next()
    // }
  },
  {
    path:'/register',
    name:'register',
    component:Register,
    meta:{title:'注册',}
  },
  {
    path:'/payment',
    name:'payment',
    component:Payment,
    meta:{title:'立即支付',verification:true}
  },
  {
    path:'/address',
    name:'address',
    component:Address,
    meta:{title:'收货地址',}
  },
  {
    path:'/pay/selectShop',
    name:'selectShop',
    component:SelectShop,
    meta:{title:'选择门店',}
  },
]

const router = new Router({
  routes,
  mode:'history'
})

router.beforeEach((to, from, next) => {
  if(to.meta.verification && !store.state.token){
    next({name:'login',params:{path:to.path}})
  }
  document.title=to.matched[0].meta.title
  next()
})

export default router
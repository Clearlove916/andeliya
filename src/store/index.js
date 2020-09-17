import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modules from './modules'

const store = new Vuex.Store({
  state:{
    uid:null,
    token:null,
    totalPrice:0,
    order:[
      {id:'202008290001',
      goods:{id:1,imageurl:require('../assets/images/shopCar/goods/Chocolate-cake.png'),
      name:'巧克力千层蛋糕', type:'草莓装饰款',stock:'25.00'},state:1},
      {id:'202008290002',
      goods:{id:1,imageurl:require('../assets/images/shopCar/goods/Chocolate-cake.png'),
      name:'巧克力千层蛋糕', type:'草莓装饰款',stock:'25.00'},state:1}
    ],
    shopCar:[
      {id:4,imageurl:require('../assets/images/shopCar/goods/Chocolate-cake.png'),
        name:'巧克力千层蛋糕', type:'草莓装饰款',stock:'25.00',number:1,select:false},
        {id:5,imageurl:require('../assets/images/shopCar/goods/Croissant.png'),
        name:'松软牛角面包(纯手工)', type:'无夹心',stock:'7.00',number:1,select:false},
        {id:6,imageurl:require('../assets/images/shopCar/goods/Strawberry-Cake.png'),
        name:'巧克力酸奶蛋糕', type:'酸奶＋水果',stock:'25.00',number:1,select:false}
    ],
    address:[
      {id:1,name:'小王',phone:'13525472293',location:'河南省洛阳市嵩县伊动水城A区606',type:1,select:true},
      {id:2,name:'小王',phone:'13525472293',location:'河南省洛阳市嵩县伊动水城A区607',type:0,select:false},
      {id:3,name:'小王',phone:'13525472293',location:'河南省洛阳市嵩县伊动水城A区608',type:0,select:false}
    ]
  },
  mutations,
  actions,
  getters,
  modules
})

export default store
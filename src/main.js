import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import Toast from './components/common/toast/index'
import CommonToast from './components/common/commonToast/index'
import VueAMap from 'vue-amap';


Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

Fastclick.attach(document.body)

Vue.use(VueLazyload,{
  loading:require('./assets/images/common/load.png')
})

Vue.use(Toast)
Vue.use(CommonToast)
Vue.use(VueAMap);

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '1feee13d92ca6e42e727404acfa229dd',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geolocation'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});
 

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

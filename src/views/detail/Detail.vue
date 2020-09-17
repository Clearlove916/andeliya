<template>
  <div class="detail">
    <top-bar @back="back"></top-bar>
    <scroll class="wraper" ref="scroll" @sendPosition="receivePosition">
      <swiper class="swiper" :swiperImg="swiperImg"></swiper>
      <general-mation :goods="goods"></general-mation>
    </scroll>
    <back-top @click.native="backTop" v-show="backTopIsshow"></back-top>
    <bottom-bar @addToShopCar="addToShopCar" @buyNow="buyNow"></bottom-bar>
  </div>
</template>

<script>
  import Scroll from 'components/common/better-scroll/Scroll'

  import Swiper from './childComponents/DetailSwiper'
  import TopBar from './childComponents/TopBar'
  import bottomBar from './childComponents/BottomBar'
  import GeneralMation from './childComponents/GeneralMation'

  import {itemListenerMixin,backToTopMixin} from 'common/mixin.js'

  import {getGoodsByname} from 'network/detail'
 

  export default {
    name:'Detail',
    data() {
      return {
        goodId:0,
        goods:{},
        swiperImg:[
          require('../../assets/images/home/swiper/Rotation-chart.png'),
          require('../../assets/images/home/swiper/Rotation-chart2.png'),
          require('../../assets/images/home/swiper/Rotation-chart3.png')
        ],
        goodName:''
      }
    },
    components:{
      TopBar,
      Swiper,
      bottomBar,
      Scroll,
      GeneralMation
    },

    //混入
    mixins:[itemListenerMixin,backToTopMixin],
    
    created(){
      this.getGoodsByname(this.$route.params.name)
    },

    methods:{
      //返回到主页并销毁该页面
      back(){
        this.$destroy();
        this.$router.back()
      },

      //根据商品名称获取商品详细信息
      getGoodsByname(name){
        getGoodsByname(1,name).then(res=>{
          this.goods = res.data[0]
        })
      },

      //监听better-scroll滚动位置
      receivePosition(position){
        //判断backtop是否显示
        this.backTopIsshow = (-position.y)>500;
      },

      //加入购物车事件
      addToShopCar(){
        if(this.$store.state.token){
          let newGoods = {}
          newGoods.id = this.goods.id
          newGoods.imageurl = this.goods.imageurl
          newGoods.name = this.goods.name
          newGoods.type = this.goods.categoryname
          newGoods.stock = this.goods.stock
          newGoods.number = 1
          newGoods.select = false  
          this.$store.commit('putGoodsToShopCAr',newGoods)
          this.$toast.show('加入购物车成功',2000);
        }else{
          this.$router.push('/login')
        }
      },

      //立即购买
      buyNow(){
        if(this.$store.state.token){
          this.$router.push({
            name:'payment',
            params:{
              name:this.goods.name,
              type:1
            }
          })
        }else{
          this.$router.push('/login')
        }
        
      }
    },
  }

</script>
<style lang="less" scoped>
  .detail{
    .wraper{
      overflow: hidden;
      height: calc(100vh - 44px - 49px);
      background-color: #f4f4f4;
    }
  }
</style>
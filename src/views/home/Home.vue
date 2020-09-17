<template>
  <div class="home">
    <top-bar @searchGoods="searchGoods" @goodInit="goodInit"></top-bar>
    <scroll class="scroll" ref="scroll" @pullUpLoad="loadMore" 
     @sendPosition="receivePosition">
      <swiper class="swiper" ref="bigSwiper" :swiperImg="swiperImg"></swiper>
      <mini-swiper ref="miniSwiper" :newsList="newsList"></mini-swiper>
      <recommend :recommendList="recommendList"></recommend>
      <must-buy-zone></must-buy-zone>
      <common-title class="commonTitle">
        <img slot="leftImg" src="~assets/images/home/common/Fabulous.png">
        <span slot="leftText">推荐产品</span>
      </common-title>
      <good-list :goodList="goodListShow.list"></good-list>
      <back-top @click.native="backTop" v-show="backTopIsshow"></back-top>
    </scroll>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import Scroll from 'components/common/better-scroll/Scroll'
  import BottomBar from 'components/content/btmTabbar/btmTabbar'
  import GoodList from 'components/content/Goods/GoodList'

  import Swiper from './childComponents/HomeSwiper'
  import topBar from './childComponents/TopBar'
  import Recommend from './childComponents/Recommend'
  import MustBuyZone from './childComponents/MustBuyZone'
  import MiniSwiper from './childComponents/MiniSwiper'
  import CommonTitle from './childComponents/CommonTitle'

  import {itemListenerMixin,backToTopMixin} from 'common/mixin.js'

  import {searchGoods,getBanner,getNews,getGoods} from 'network/home'

  export default {
    name:'Home',
    data() {
      return {
        swiperImg:[],
        recommendList:[
          {imgUrl:require('../../assets/images/home/recommend/news.png'),name:'最新甜品'},
          {imgUrl:require('../../assets/images/home/recommend/gift.png'),name:'积分兑换'},
          {imgUrl:require('../../assets/images/home/recommend/appointment.png'),name:'在线预定'},
          {imgUrl:require('../../assets/images/home/recommend/company.png'),name:'公司简介'}
        ],
        newsList:[],
        goodListShow:{page:0,list:[]},
        searchGoodsName:''
      }
    },
    components:{
      BottomBar,
      topBar,
      Swiper,
      Recommend,
      MustBuyZone,
      MiniSwiper,
      CommonTitle,
      Scroll,
      GoodList
    },
    //混入
    mixins:[itemListenerMixin,backToTopMixin],

    created(){
      this.getHomeGoods()

      this.getBanner()

      this.getNews()
    },
    activated(){
      this.$refs.scroll.refresh();
    },
    mounted(){
      
    },
    methods:{

      //网络请求

      //搜索商品
      searchGoods(goodName){
        if(goodName === ''){
          this.goodInit()
        }else{
          this.searchGoodsName = goodName
          searchGoods(1,goodName).then(res=>{
            this.goodListShow.list = []
            this.goodListShow.list.push(...res.data)
          })
        } 
      },

      //当搜索为空时重新加载商品数据
      goodInit(){
        this.goodListShow.list = []
        this.searchGoodsName = ''
        this.goodListShow.page = 0
        this.getHomeGoods()
      },

      //获取轮播图
      getBanner(){
        getBanner().then(res=>{
          if(res){
            // this.swiperImg = res.data.tabl
            // let swiperList = res.data.table
            // for(let i = 0;i < swiperList.length;i ++){
            //   for(let j = 0;j < swiperList.length - i - 1;j ++){
            //     let middleData
            //     if(swiperList[j + 1].id < swiperList[j].id){
            //        middleData = swiperList[j+1]
            //        swiperList[j + 1] = swiperList[j]
            //        swiperList[j] = middleData
            //     }
            //   }
            // }
            // this.swiperImgTest = swiperList
            function sortId(a,b) {
              return a.id - b.id
            }
            this.swiperImg = res.data.table.sort(sortId)
          }
        })
      },
      //获取热点信息
      getNews(){
        getNews().then(res=>{
          if(res){
            this.newsList = res.data.table
          }
        })
      },
      //下拉加载商品函数
      loadMore(){
        if(this.goodListShow.page >= 4 || this.searchGoodsName !== ''){
          return
        }
        this.getHomeGoods()
        this.$refs.scroll.refresh();
      },

      //获取商品函数
      getHomeGoods(){
        let page = this.goodListShow.page + 1;
        let num = 4
        getGoods(num,page,1).then(res=>{
          if(res){
            this.goodListShow.list.push(...res.data)
            this.goodListShow.page += 1 
            this.$refs.scroll.finishPullUp();
          }else{
            console.log("商品已经加载完了")
          }       
        })
      },


      //事件监听

      //监听better-scroll滚动位置
      receivePosition(position){
        //判断backtop是否显示
        this.backTopIsshow = (-position.y)>500;
      }

    }
  }

</script>
<style lang="less" scoped>
  .home{
    .scroll{
      height: calc(100vh - 49px - 44px);
      padding: 0 12px;
      background-color: #f5f5f5;
      overflow: hidden;
      .commonTitle{
        margin: 10px 0;
      }
    }
  }
  
  
</style>
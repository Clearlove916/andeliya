<template>
  <div class="shopCar">
    <top-bar></top-bar>
    <scroll class="wraper" ref="scroll">
      <good-List :goodList="goodList"></good-List>
    </scroll>
    <settlement></settlement>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import Scroll from 'components/common/better-scroll/Scroll'
  import BottomBar from 'components/content/btmTabbar/btmTabbar'

  import TopBar from './childComponents/TopBar'
  import Settlement from './childComponents/Settlement'
  import GoodList from './childComponents/goodList'

  import {getShopCar} from 'network/shopCar'
  
  export default {
    name:'ShopCar',
    data() {
      return {
        goodList:[]
      }
    },
    components:{
      BottomBar,
      TopBar,
      Scroll,
      Settlement,
      GoodList
    },
    created(){
      this.goodList = this.$store.state.shopCar

      this.getShopCar(this.$store.state.uid,this.$store.state.token)
    },
    activated(){
      this.goodList = this.$store.state.shopCar
    },
    methods:{
      //将请求到购物车信息保存到vuex中
      getShopCar(uid,token){
        getShopCar(uid,token).then(res=>{
          let goodsList = res.data.table
          if(goodsList){
            goodsList.forEach(item=>{
              let goods = {}
              goods.id = item.id
              goods.name = item.name
              goods.imageurl = item.imageurl
              goods.type = item.categoryname
              goods.stock = item.stock
              goods.number = item.num
              goods.select = false
              this.$store.commit('putGoodsToShopCAr',goods)
            }) 
          } 
        })
      }
    }
  }

</script>
<style lang="less" scoped>
  .shopCar{
    .wraper{
      margin: 0 auto;
      height: calc(100vh - 44px - 49px - 49px);
      background-color: #f4f4f4;
      padding: 0 12px;
      overflow: hidden;
    }
  }
</style>
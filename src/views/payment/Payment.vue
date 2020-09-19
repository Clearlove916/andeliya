<template>
  <div class="payment">
    <top-bar class="topBar" @back="back"></top-bar>
    <scroll class="scroll" ref="scroll">
      <div class="container">
        <harvest-address @click.native="selectShop"></harvest-address>
        <goods v-for="(item,index) in goodsList" :goods="item" :key="index"></goods>
        <sp-address @click.native="changeAddress"></sp-address>
      </div> 
    </scroll>
    <bootom-bar :totalPrice="totalPrice" @pay="pay"></bootom-bar>
  </div>
</template>

<script>
  import Scroll from 'components/common/better-scroll/Scroll'

  import TopBar from './childComponents/TopBar'
  import HarvestAddress from './childComponents/HarvestAddress'
  import Goods from './childComponents/Goods'
  import SpAddress from './childComponents/SpAddress'
  import BootomBar from './childComponents/BootomBar'

  import {getGoodsByname} from 'network/detail'

  export default {
    name:'Payment',
    data() {
      return {
        goodsList:[]
      }
    },
    components:{
      TopBar,
      HarvestAddress,
      Goods,
      BootomBar,
      SpAddress,
      Scroll
    },
    computed:{
      //计算应付金额
      totalPrice(){
        let type = this.$route.params.type
        let totalPrice = 0
        if(type === 0){
          this.goodsList.forEach(item=>{
            totalPrice += parseInt(item.stock) * item.number
          })
        }else{
          this.goodsList.forEach(item=>{
            totalPrice += parseInt(item.stock)
          })
        }
        
        return totalPrice
      }
      
    },
    created(){      
      let type = this.$route.params.type
      if(type === 1){
        let name = this.$route.params.name
        this.getGoodsByname(name)
        
      }else if(type === 0){
        this.goodsList = this.$store.getters.backSeltGoods
        //在购物车内购买选中的商品后,如果未购买,将其加入未支付订单
        this.$store.commit('addOrderToWaitSell','')
        //在购物车内购买选中的商品后，删除已经购买过的商品
        this.$store.commit('delGoodsOfSel')
      }
      
    },
    methods:{
      //返回到上一个页面并销毁该页面
      back(){
        this.$destroy();
        this.$router.back()
      },

      //根据商品名称获取商品详细信息
      getGoodsByname(name){
        getGoodsByname(1,name).then(res=>{
          let data = JSON.stringify(res.data)
          this.goodsList = JSON.parse(data)  
          this.$store.commit('addOrderToWaitSell',this.goodsList)   
        })
      },

      //选择门店
      selectShop(){
        this.$router.push('/pay/selectShop')
      },

      //选择收货地址
      changeAddress(){
        this.$router.push('/address')
      },
      pay(){
        let payOrderList = this.$store.state.payOrder
        console.log(payOrderList)
        this.$destroy();
        this.$router.push('/user/order')
      }
    },
  }

</script>
<style lang="less" scoped>
  .payment{
    .scroll{
      height: calc(100vh - 44px - 49px);
      background-color: #f2f2f2;
      overflow: hidden;
      .container{
        padding-top: 12px;
      }
    }
  }
</style>
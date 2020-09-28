<template>
  <div class="payment">
    <top-bar class="topBar" @back="back"></top-bar>
    <scroll class="scroll" ref="scroll">
      <div class="container">
        <harvest-address @click.native="selectShop"></harvest-address>
        <goods v-for="(item,index) in goodsList" :goods="item" :key="index"></goods>
        <sp-address @click.native="changeAddress"></sp-address>
        <div class="payMethod">
          <span>支付方式</span>
          <div class="selectPayMethod" @click="selectPayMethod">
            <img :src="payMethodImg" alt="">
            <span>{{payMethodTxt}}</span>
            <img src="~/assets/images/payment/common/更多.svg" alt="">
          </div>
        </div>
        <div class="agreement">
          <img :src="agreementImg" alt="" @click="sureAgreement">
          <span>我已经阅读并同意 <p>《支付协议》</p></span>
        </div>
      </div> 
    </scroll>
    <div class="payMethodList" ref="payMethodList">
      <div class="title">
        <h4>请选择支付方式</h4>
        <img src="~assets/images/payment/payMethod/删除.svg" @click="selectPayMethod" alt="">
      </div>
      <div class="payMethodListBox">
        <div @click="changePayState(0)">微信支付</div>
        <div @click="changePayState(1)">支付宝支付</div>
      </div>
    </div>
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
        goodsList:[],
        payMethod:0,
        payMethodImg:require("../../assets/images/payment/payMethod/微信支付.svg"),
        payMethodTxt:"微信支付",
        agreementImg:require("../../assets/images/payment/payMethod/同意1.svg"),
        agreementState:0,
        isShow:false
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
        this.$store.commit('changeOrder','')
        this.$destroy();
        this.$router.push('/user/order')
      },

      //选择支付方式
      selectPayMethod(){
        if(this.isShow === false){
          this.$refs.payMethodList.style.bottom = '0px';
          this.$refs.payMethodList.style.transition='all 0.9s';
          this.isShow = true
        }else if(this.isShow === true){
          this.closePayMethodBox()
        }
        
      },
      sureAgreement(){
        if(this.agreementState === 0){
          this.agreementImg = require("../../assets/images/payment/payMethod/同意.svg")
          this.agreementState = 1
        }else if(this.agreementState === 1){
          this.agreementImg = require("../../assets/images/payment/payMethod/同意1.svg")
          this.agreementState = 0
        }
      },

      changePayState(state){
        if(state === 0){
          this.payMethodImg = require("../../assets/images/payment/payMethod/微信支付.svg")
          this.payMethodTxt = "微信支付"
          this.closePayMethodBox()
        }else if(state === 1){
          this.payMethodImg = require("../../assets/images/payment/payMethod/支付宝支付.svg")
          this.payMethodTxt = "支付宝支付"
          this.closePayMethodBox()
        }
      },
      closePayMethodBox(){
        this.$refs.payMethodList.style.bottom = '-150px';
        this.$refs.payMethodList.style.transition='all 0.9s';
        this.isShow = false
      }
    }
  }

</script>
<style lang="less" scoped>
  .payment{
    position: relative;
    .scroll{
      height: calc(100vh - 44px - 49px);
      background-color: #f2f2f2;
      overflow: hidden;
      .container{
        padding-top: 12px;
      }
      .payMethod{
        background-color: white;
        width: 93%;
        height: 50px;
        border-radius: 10px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
          color: #afafaf;
          font-size: 18px;
          padding-left: 15px;
        }
        .selectPayMethod{
          height: 50px;
          display: flex;
          align-items: center;
          img{
            width: 24px;
            height: 24px;
            vertical-align: middle;
          }
          span{
            color: black!important;
            font-size: 16px;
            padding-right: 5px;
            vertical-align: middle;
          } 
        }
      }
      .agreement{
        width: 93%;
        height: 25px;
        margin: 0 auto;
        margin-top: 15px;
        display: flex;
        align-items: center;
          img{
            width: 20px;;
            vertical-align: middle;
          }
          span{
            font-size: 13px;
            color: #afafaf;
            padding-left: 15px;
            p{
              display: inline;
              color: rgb(0, 132, 255);
            }
          }
        }
    }
    .payMethodList{
      z-index: 999;
      width: 100%;
      position: absolute;
      background-color: white;
      height: 150px;
      bottom: -150px;
      .title{
        display: flex;
        align-items: center;
        height: 40px;
        h4{
          order: 1;
          margin: 0;
          width: 100%;
          text-align: center;
          padding-left: 35px;
        }
        img{
          margin-right: 15px;
          order: 1;
          height: 20px;
        }
      }
      .payMethodListBox{
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        div{
          width: 93%;
          text-align: center;
          height: 40px;
          line-height: 40px;
          border-radius: 5px;    
        }
        div:first-child{
          color: rgb(0, 199, 0);
          border: 1px solid rgb(0, 199, 0);
        }
        div:last-child{
          color: rgb(0, 122, 236);
          border: 1px solid rgb(0, 122, 236);
        }
      }
    }
  }
</style>
<template>
  <div class="orderItem">
    <div class="head">
      <span>订单号: {{orderItem.id}}</span>
      <span>{{state}}</span>
    </div>
    <div class="middle">
      <img :src="orderItem.goods.imageurl" alt="">
      <div class="goodsMation">
        <h4>{{orderItem.goods.name}} × {{orderItem.goods.number}}</h4>
        <p>{{orderItem.goods.type}}</p>
        <span>￥{{orderItem.goods.stock * orderItem.goods.number}}</span>
      </div>
    </div>
    <div class="bottom">
      <span @click="delOrCancelOrder">{{orderState}}</span>
      <span @click="payOrAcceptOrder">{{changeState}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'OrderItem',
    data() {
      return {
        state:"",
        orderState:"",
        changeState:""
      }
    },
    props:{
      orderItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    created(){
      if(this.orderItem.state === 1){
        this.state = "待支付"
        this.orderState = "取消订单"
        this.changeState = "立即付款"
      }else if(this.orderItem.state === 2){
        this.state = "进行中"
        this.orderState = "取消订单"
        this.changeState = "确认收货"
      }else if(this.orderItem.state === 3){
        this.state = "已完成"
        this.orderState = "删除订单"
        this.changeState = "再来一单"
      }else if(this.orderItem.state === 4){
        this.state = "已取消"
        this.orderState = "删除订单"
        this.changeState = "恢复订单"
      }
    },
    methods:{
      //取消订单，并将取消的订单加入到已取消的订单中
      delOrCancelOrder(){
        if(this.orderItem.state === 2 || this.orderItem.state === 1){
          this.$commontoast.show('确定要取消订单吗',this.orderItem.id,'cancel',this.$store,'order')
        }
        //删除订单
        if(this.orderItem.state === 3 || this.orderItem.state === 4){
          this.$commontoast.show('确定要删除订单吗',this.orderItem.id,'del',this.$store,'order')
        }
      },
      //
      payOrAcceptOrder(){
        if(this.orderItem.state === 1){
          this.$store.commit('delOrder',this.orderItem.id)
          this.$router.push({
            name:'payment',
            params:{
              name:this.orderItem.goods.name,
              type:1
            }
          })
        }
        if(this.orderItem.state === 2){
          this.$commontoast.show('确定要收货吗?',this.orderItem.id,'accept',this.$store,'order')
        }
      }
    }
  }

</script>
<style lang="less" scoped>
.orderItem{
  background-color: white;
  margin-bottom: 7.5px;
  padding: 0 15px;
  .head{
    display: flex;
    justify-content: space-between;
    height: 38px;
    align-items: center;
    border-bottom: 2px solid #e2e2e2;
    span:first-child{
      font-size: 14px;
    }
    span:last-child{
      font-size: 14px;
    }
  }
  .middle{
    display: flex;
    padding: 12px 0;
    border-bottom: 2px solid #e2e2e2;
    img{
      width: 76px;
      height: 76px;
    }
    .goodsMation{
      padding-left: 15px;
      h4{
        margin: 0;
        font-size: 14px;
      }
      p{
        margin: 0;
        font-size: 12px;
        color: #929090;
        margin: 5px 0;
      }
      span{
        font-size: 13px; 
      }
    }
  }
  .bottom{
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
    span{
      font-size: 10px;
      color: #929090;
      padding: 3px 10px;
      border: 1px solid #929090;
      border-radius: 3px;
      margin-right: 18px;
    }
    span:last-child{
      margin: 0;
    }
  }
}
</style>
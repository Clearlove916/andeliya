<template>
  <div class="orderItem">
    <div class="head">
      <span>订单号: {{orderItem.id}}</span>
      <span>{{state}}</span>
    </div>
    <div class="middle">
      <img :src="orderItem.goods.imageurl" alt="">
      <div class="goodsMation">
        <h4>{{orderItem.goods.name}}</h4>
        <p>{{orderItem.goods.type}}</p>
        <span>￥{{orderItem.goods.stock}}</span>
      </div>
    </div>
    <div class="bottom">
      <span @click="delOrder">取消预约</span>
      <span>确认收货</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'OrderItem',
    data() {
      return {
        state:""
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
        this.state = "进行中"
      }else if(this.orderItem.state === 2){
        this.state = "已完成"
      }else if(this.orderItem.state === 3){
        this.state = "已取消"
      }else if(this.orderItem.state === 0){
        this.state = "待支付"
      }
    },
    methods:{
      //取消订单
      delOrder(){
        this.$commontoast.show('确定要取消订单吗',this.orderItem.id,this.$store,'order');
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
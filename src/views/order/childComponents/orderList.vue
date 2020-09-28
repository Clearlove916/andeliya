<template>
  <div class="orderList" :key="$store.state.key">
    <order-item v-for="(item,index) in backOrder"
     :key="index" :orderItem="item"></order-item>
  </div>
</template>

<script>
  import OrderItem from './orderItem'

  export default {
    name:'OrderList',
    data() {
      return {
        orderList: this.$store.state.order
      }
    },
    props:{
      orderTypeNum:{
        Type:Number,
        default(){
          return 0
        }
      }
    },
    components:{
      OrderItem
    },
    computed:{
      backOrder(){
        this.orderList = this.$store.state.order
        let newOrderList=[]
        if(this.orderTypeNum === 0){
          newOrderList=[]
          this.orderList.forEach(item=>{
            newOrderList.push(item)
          })
        }else{
          newOrderList=[]
          this.orderList.forEach(item=>{
            if(item.state === this.orderTypeNum){
              newOrderList.push(item)
            }
          })
        }   
        return newOrderList
      }
    },
  }

</script>
<style lang="less" scoped>
</style>
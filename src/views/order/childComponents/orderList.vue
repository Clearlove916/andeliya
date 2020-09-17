<template>
  <div class="orderList">
    <order-item v-for="(item,index) in $store.state.order"
     :key="index" :orderItem="item"></order-item>
  </div>
</template>

<script>
  import OrderItem from './orderItem'

  export default {
    name:'OrderList',
    components:{
      OrderItem
    }
  }

</script>
<style lang="less" scoped>
</style>
<template>
  <div class="order">
    <top-bar></top-bar>
    <transaction-type></transaction-type>
    <scroll ref="scroll" class="scroll">
      <order-list></order-list>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/better-scroll/Scroll'

  import TopBar from './childComponents/TopBar'
  import TransactionType from './childComponents/TransactionType'
  import orderList from './childComponents/orderList'

  export default {
    name:'Order',
    components:{
      TopBar,
      Scroll,
      TransactionType,
      orderList
    }
  }

</script>
<style lang="less" scoped>
  .order{
    .scroll{
      height: calc(100vh - 49px - 30px - 5px);
      background-color: #eeeeee;
      padding-top: 10px;
      overflow: hidden;
    }
  }
</style>
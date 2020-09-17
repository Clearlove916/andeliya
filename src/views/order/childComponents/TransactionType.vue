<template>
  <div class="transactionType">
    <span v-for="(item,index) in trTypeList"
     :key="index" :class="{active: index === isSelect}" @click="trTypeClick(index)">
      {{item}}
    </span>
  </div>
</template>

<script>
  export default {
    name:'TransactionType',
    data() {
      return {
        trTypeList:['全部','待支付','进行中','已完成','已取消'],
        isSelect:0
      }
    },
    methods:{
      trTypeClick(index){
        this.isSelect = index
      }
    }
  }

</script>
<style lang="less" scoped>
  .transactionType{
    display: flex;
    padding: 0 15px;
    justify-content: space-between;
    height: 30px;
    align-items: center;
    span{
      color: rgb(87, 86, 86);
      padding-bottom: 3px;
      width: 50px;
      text-align: center;
    }
    .active{
      color: black;
      font-weight: 600;
      border-bottom: 2px solid black;
    }
  }

</style>
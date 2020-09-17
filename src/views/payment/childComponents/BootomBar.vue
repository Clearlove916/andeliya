<template>
  <div class="bootomBar">
    <div class="totalPrice">
      <span>合计: </span>
      <span>{{'￥'+totalPrice}}</span>
    </div>
    <div class="pay" @click="pay">
      去支付
    </div>
  </div>
</template>

<script>
  export default {
    name:'BootomBar',
    props:{
      totalPrice:{
        type:Number,
        default(){
          return 0
        }
      }
    },
    methods:{
      pay(){
        this.$emit('pay')
      }
    }
  }

</script>
<style lang="less" scoped>
  .common{
    display: flex;
    align-items: center;
  }
  .bootomBar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    padding: 0 15px;
    justify-content: space-between;
    .common();
    .totalPrice{
      .common();
      span:first-child{
        color: rgb(133, 133, 133);
      }
      span:last-child{
        font-size: 20px;
      }
    } 
    .pay{
      .common();
      justify-content: center;
      height: 40px;
      width: 120px;
      background-color: rgb(206, 192, 3);
      border-radius: 20px;
      color: white;
      font-size: 18px;
    }
  }
</style>
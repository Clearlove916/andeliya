<template>
  <div class="detailBottomBar">
    <div class="leftBar">
      <div class="leftBarBox">
        <img src="~assets/images/detail/bottombar/店铺.svg" alt="">
        <span>店铺</span>
      </div>
      <div class="leftBarBox">
        <img src="~assets/images/detail/bottombar/客服.svg" alt="">
        <span>客服</span>
      </div>
      <div class="leftBarBox">
        <img src="~assets/images/detail/bottombar/Collection.svg" alt="">
        <span>收藏</span>
      </div>
    </div>
    <div class="rightBar">
      <div class="rightBarBox1" @click="addToShopCar">
        加入购物车
      </div>
      <div class="rightBarBox2" @click="buyNow">
        立即购买
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'DetailBottomBar',
    methods: {
      addToShopCar(){
        this.$emit("addToShopCar");
      },
      buyNow(){
        this.$emit("buyNow");
      }
    },
  }
</script>
<style lang="less" scoped>
  .commoncss{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .detailBottomBar{
    height: 49px;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
  }
  .leftBar{
    flex: 4;
    display: flex;
    background-color: white;
  }
  .leftBarBox{
    flex: 1;
    color: rgb(77, 77, 77);
    flex-direction: column;
    .commoncss();
    font-size: 12px;
  }
  .leftBarBox img{
    width: 22px;
    height: 22px;
  }
  .rightBar{
    display: flex;
    flex: 5;
  }
  .rightBarBox1,.rightBarBox2{
    flex: 1;
    .commoncss();
    font-size: 15px;
    color: white;
  }
  .rightBarBox1{
    background-color: rgb(255, 119, 7);
  }
  .rightBarBox2{
    background-color: rgb(243, 3, 43);
    color: white;
  }
</style>
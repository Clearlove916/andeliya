<template>
  <div class="goods">
    <div class="content">
      <img :src="goods.imageurl" alt="">
      <div class="goodsInfo">
        <span class="name">{{goods.name}}</span>
        <span class="type">慕斯蛋糕</span>
        <div class="numAndPrice">
          <span class="num">×{{getNum}}</span>
          <span class="price">￥{{goods.stock}}</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <span class="getTypei">到店自取</span>
      <span>应付
        <span class="money">
          {{'￥'+goods.stock}}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Goods',
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      getNum(){
        if(this.goods.number){
          return this.goods.number
        }else{
          return 1
        }
      }
    }
  }

</script>
<style lang="less" scoped>
  .goods{
    width: 88%;
    height: 180px;
    background-color: white;
    border-radius: 10px;
    margin: 0 auto;
    padding: 0 10px;
    margin-top: 10px;
    .content{
      height: 119px;
      display: flex;
      align-items: center;
      padding: 0 0 0 20px;
      border-bottom: 1px solid rgb(235, 235, 235);
      img{
        width: 70px;
        height: 70px;
      }
      .goodsInfo{
        height: 80px;
        display: flex;
        margin-left: 8px;
        font-size: 14px;
        flex-direction: column;
        .numAndPrice{
          text-align: right;
          margin-top: 20px;
          width: 225px;
          .price{
            margin-left: 42px;
          }
        }
      }
    }
    .bottom{
      height: 60px;;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .getTypei{
        font-size: 15px;
        color: rgb(185, 185, 185);
      }
      .money{
        font-size: 20px;
      }
    }
  }
</style>
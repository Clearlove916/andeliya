<template>
  <div class="generalMation">
    <div class="priceMation">
      <h3>{{ goods.name }}</h3>
      <div class="price">
        <h3>￥{{ goods.stock }}</h3>
        <span>库存203件</span>
      </div>
    </div>
    <div class="freight">
      运费 <span>包邮</span>
      销量 <span>98</span>
    </div>
    <div class="freight">
      配送 <span>同城送、快递、自提</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'GeneralMation',
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }

</script>
<style lang="less" scoped>
  .generalMation{
    .priceMation{
      background-color: white;
      h3{
        margin: 7px 0 0 0;
        padding-left: 7px;
      }
      .price{
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3{
          padding-bottom: 10px;
          color: red;
        }
        span{
          font-size: 12px;
          color: #949191;
          padding-right: 5px;
        }
      }
    }
    .freight{
      margin-top: 7px;
      background-color: white;
      height: 44px;
      font-size: 15px;
      line-height: 44px;
      padding-left: 15px;
      color: rgb(32, 31, 31);
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      span:first-child{
        margin-right: 30px;
      }
    }
  }
</style>
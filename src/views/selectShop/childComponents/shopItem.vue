<template>
  <div class="shopItem">
    <div class="shopInfo">
      <h4 class="shopName">
        洛阳中州路王府井店
      </h4>
      <span class="location">
        洛阳 西工区 王府井百货一楼 中州中路429号
      </span>
      <span class="distance">
        669m
      </span>
    </div> 
    <img src="~assets/images/selectThop/common/感叹号中.svg" alt="">
  </div>
</template>

<script>
  export default {
    name:'ShopItem'
  }

</script>
<style lang="less" scoped>
  .shopItem{
    padding: 0 15px 10px 30px;
    display: flex;
    align-items: center;
    .shopInfo{
      display: flex;
      flex-direction: column;
      h4{
        margin: 15px 0 10px 0;
      }
      .location{
        font-size: 13px;
        color: rgb(153, 153, 153);
      }
      .distance{
        margin-top: 5px;
        font-size: 14px;
      }
    }
    img{
      margin-left: 40px;
      width: 30px;
      height: 30px;
    }
  }
</style>
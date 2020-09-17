<template>
  <div class="harvestAddress">
    <img src="~assets/images/payment/common/坐标.svg" alt="">
    <div class="address">
      <h4>洛阳王府井店</h4>
      <span>洛阳 西工区 王府井百货一楼 中州中路429号</span>
    </div>
    <img src="~/assets/images/payment/common/更多.svg" alt="">
  </div>
</template>

<script>
  export default {
    name:'HarvestAddress',
    data () {
      return {
        Spaddress:{}
      }
    },
    activated(){
      
    }
  }

</script>
<style lang="less" scoped>
  .harvestAddress{
    display: flex;
    align-items: center;
    background-color: white;
    width: 88%;
    height: 80px;
    margin: 0 auto;
    border-radius: 10px;
    padding: 0 10px;
    img{
      width: 25px;
      height: 25px;
    }
    .address{
      margin-left: 10px;
      
      h4{
        margin: 0 0 10px 0;
        font-family: Georgia, 'Times New Roman', Times, serif;
      }
      span{
        font-size: 12px;
        color: #888888;
      }
    }
    img:last-child{
      width: 26px; 
      height: 26px;
      margin-left: 30px;
    }
  }
</style>
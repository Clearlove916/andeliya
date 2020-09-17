<template>
  <div class="mustBuyZone">
    <common-title>
      <img slot="leftImg" src="~assets/images/home/common/Shopping-Cart-middle.png">
      <span slot="leftText">必买专区</span>
    </common-title>
    <div class="content">
      <div class="contentItem">
        <img src="~assets/images/home/common/Cream-cake.png" alt="">
        <span>
          <p>人气推荐</p>
          <p>小蛋糕</p>
        </span>
      </div>
      <div class="contentItem">
        <img src="~assets/images/home/common//Cherry-Cake.png" alt="">
        <span>
          <p>今日推荐</p>
          <p>小蛋糕</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonTitle from './CommonTitle'

  export default {
    name:'mustBuyZone',
    components:{
      CommonTitle
    }
  }

</script>
<style lang="less" scoped>
  .mustBuyZone{
    margin-top: 8px;
    .title{
      display: flex;
      justify-content: space-between;
      .left{
        img{
          width: 4.5333vw;
          height: 2.099vh;
          vertical-align: middle;
        }
        span{
          margin-left: 2.1333vw;
          font-size: 3.4667vw;
          font-weight: 1000;
          color: #111010;
          vertical-align: middle;
        }
      }
      .right{
        img{
          width: 1.6vw;
          height: 1.5742vh;
          vertical-align: middle;
        }
        span{
          font-size: 2.6667vw;
          color: #454545;
          margin-right: 1.0667vw;
        }
      }
    }
    .content{
      display: flex;
      justify-content: space-around;
      margin-top: 7px;
      .contentItem{
        width: 42.1333vw;
        height: 10.8696vh;
        border-radius: 1.3333vw;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          width: 11.3333vw;
          height: 8.0960vh;
        }
        span{
          padding-left: 6px;
          color: white;
          p{
            margin: 0;
          }
          p:first-child{
            font-size: 15px;
          }
          p:last-child{
            font-size: 2.9333vw;
            text-align: right;
            margin-top: 0.7496vw;
          }
        }
      }
      div:first-child{
        background-color: #7b4f46;
      }
      div:last-child{
        background-color: #d87a6e;
      }
    }
  }
</style>
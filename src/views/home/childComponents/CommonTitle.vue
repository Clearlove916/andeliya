<template>
  <div class="title">
      <div class="left">
        <slot name="leftImg"></slot>
        <slot name="leftText"></slot>
      </div>
      <div class="right">
        <span>更多</span>
        <img src="~assets/images/home/common/More.png">
      </div>
    </div>
</template>

<script>
  export default {
    name:'CommonTitle'
  }

</script>
<style lang="less" scoped>
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
</style>
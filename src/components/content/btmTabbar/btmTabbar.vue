<template>
  <div class="btmTabbar">
    <btm-bar-list>
      <btm-bar-item path="/home" :textColor="textColor">
        <img slot="activeImg" src="~assets/images/bottomBar/home(select).svg" alt="">
        <img slot="commonImg" src="~assets/images/bottomBar/home.svg" alt="">
        <span slot="text">首页</span>
      </btm-bar-item>
      <btm-bar-item path="/classification" :textColor="textColor">
        <img slot="activeImg" src="~assets/images/bottomBar/classification(select).svg" alt="">
        <img slot="commonImg" src="~assets/images/bottomBar/classification.svg" alt="">
        <span slot="text">分类</span>
      </btm-bar-item>
      <btm-bar-item path="/shopcar" :textColor="textColor">
        <img slot="activeImg" src="~assets/images/bottomBar/shopcar(select).svg" alt="">
        <img slot="commonImg" src="~assets/images/bottomBar/shopcar.svg" alt="">
        <span slot="text">购物车</span>
      </btm-bar-item>
      <btm-bar-item path="/user/my" :textColor="textColor">
        <img slot="activeImg" src="~assets/images/bottomBar/my(select).svg" alt="">
        <img slot="commonImg" src="~assets/images/bottomBar/my.svg" alt="">
        <span slot="text">我的</span>
      </btm-bar-item>
    </btm-bar-list>
  </div>
</template>

<script>
  import BtmBarList from '../../common/btmTabbar/btmBarList'
  import BtmBarItem from '../../common/btmTabbar/btmBarItem'

  export default {
    name:'BtmTabbar',
    data() {
      return {
        textColor:'#F89734'
      }
    },
    components:{
      BtmBarList,
      BtmBarItem
    }
  }

</script>
<style lang="less" scoped>
  .btmTabbar{
    font-size: 12px;
    color: rgb(109, 101, 101);
    img{
      width: 23px;
      height: 23px;
    }
  }
</style>
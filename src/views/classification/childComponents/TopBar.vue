<template>
  <div class="topbar">
    <top-tabbar-list>
      <div slot="center" class="searchbox">
      <img src="../../../assets/images/classification/common/搜索.svg" alt="">
      <input type="text" placeholder="安德莉亚奶油蛋糕">
    </div>
    </top-tabbar-list>
  </div>
</template>

<script>
  import TopTabbarList from 'components/content/topTabbar/topTabbarList'


  export default {
    name:'TopBar',
    components:{
      TopTabbarList
    }
  }

</script>
<style lang="less" scoped>
  .topbar{
    height: 44px;
    background-color: white;
    .searchbox{
      margin: 0 auto;
      width: 325px;
      height: 30px;
      border-radius: 15px;
      background-color: rgb(241, 240, 240);
      display: flex;
      align-items: center;
      img{
        width: 20px;
        height: 20px;
        margin-left: 15px;
      }
      input{
        font-size: 11px;
        padding-left: 7px;
        background-color: rgb(241, 240, 240);
        color: #8a8a8a;
        border: none;
      }
    } 
  }
</style>
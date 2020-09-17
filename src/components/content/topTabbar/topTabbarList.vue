<template>
  <div class="topTabbarList">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'TopTabbarList'
  }

</script>
<style lang="less" scoped>
  .commoncss{
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .topTabbarList{
    // position: fixed;
    // top: 0;
    // right: 0;
    // left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .left,.right{
      width: 60px;
      .commoncss();
    }
    .center{
      width: 100%;
      text-align: center;
      .commoncss();
    }
  }
</style>
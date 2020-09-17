<template>
  <div class="btmBarList">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'BtmBarList'
  }

</script>
<style scoped>
  .btmBarList{
    position: fixed;
    display: flex;
    width: 100vw;
    height: 49px;
    background-color: white;
    box-shadow: 0 -3px 1px rgba(100, 100, 100,0.1);
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>
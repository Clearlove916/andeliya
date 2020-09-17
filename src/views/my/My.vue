<template>
  <div class="my">
    <div class="order" @click="viewOrder">
      查看订单
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import BottomBar from 'components/content/btmTabbar/btmTabbar'

  export default {
    name:'My',
    components:{
      BottomBar
    },
    methods:{
      viewOrder(){
        this.$router.push('/user/order')
      }
    }
  }

</script>
<style lang="less" scoped>
  .my{
    height: calc(100vh - 49px);
    display: flex;
    align-items: center;
    justify-content: center;
    .order{
      height: 50px;
      width: 80px;
      text-align: center;
      border-radius: 10px;
      line-height: 50px;
      background-color: rgb(255, 153, 0);
    }
  }
</style>
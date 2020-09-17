<template>
  <div class="topBar">
    <top-tabbar-list>
      <img slot="left" src="~assets/images/common/返回.svg" alt="" @click="back">
      <h3 slot="center">我的订单</h3>
    </top-tabbar-list>
  </div>
</template>

<script>
  import TopTabbarList from 'components/content/topTabbar/topTabbarList'

  export default {
    name:'TopBar',
    components:{
      TopTabbarList
    },
    methods:{
      back(){
        this.$router.push('/user/my')
      }
    }
  }

</script>
<style lang="less" scoped>
  .topBar{
    height: 44px;
    img{
      width: 24px;
    }
    h3{
      font-size: 19px;
    }
  }
</style>
<template>
  <div class="topBar">
    <top-tabbar-list>
      <h3 slot="center">购物车(3)</h3>
    </top-tabbar-list>
  </div>
</template>

<script>
  import TopTabbarList from 'components/content/topTabbar/topTabbarList'

  export default {
    name:'Topbar',
    components:{
      TopTabbarList
    },
    methods:{
      back(){
        this.$router.back()
      }
    }
  }

</script>
<style lang="less" scoped>
  .topBar{
    height: 44px;
    h3{
      font-size: 19px;
    }
  }
</style>
<template>
  <div class="goodList">
    <good-item v-for="(item,index) in $store.state.shopCar" :key="index" :goods="item">
    </good-item>
  </div>
</template>

<script>
  import goodItem from './goodItem'

  export default {
    name:'goodList',
    props:{
      goodList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      goodItem
    }
  }

</script>
<style lang="less" scoped>
  .goodList{
    margin-top: 6px;
  }
</style>
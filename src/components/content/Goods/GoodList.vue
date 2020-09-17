<template>
  <div class="goodList">
    <good-item v-for="(item,index) in goodList" :key="index" :goodItem="item">
    </good-item>
    <div class="commonBox">
    </div>
  </div>
</template>

<script>
  import GoodItem from './GoodItem'

  export default {
    name:'GoodList',
    data() {
      return {
        flag:false
      }
    },
    props:{
      goodList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      GoodItem
    }
  }

</script>
<style lang="less" scoped>
  .goodList{
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    .commonBox{
      height: 1px;
      width: 44vw;
    }
  }
</style>
<template>
  <div class="recommendList">
    <div class="recommendItem" v-for="(item,index) in recommendList" :key="index">
      <img :src="item.imgUrl" alt="">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Recommend',
    props:{
      recommendList:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }

</script>
<style lang="less" scoped>
  .recommendList{
    margin-top: 13px;
    display: flex;
    justify-content: space-between;
    .recommendItem{
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img{
        width: 9.3333vw;
        height: 5.2474vh;
      }
      span{
        margin-top: 5px;
        font-size: 2.9333vw;
        font-weight: 1000;
        color: #111010;
      }
    }
  }
</style>
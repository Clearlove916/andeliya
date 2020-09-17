<template>
  <div class="typeList">
    <div class="scroll-wrapper" ref="Tscroll">
      <div class="scroll-content">
        <span v-for="(item,index) in typeList" :key="index"
         :class="{active:index === selectType}" @click="typeClick(index,item.id)">
          {{ item.categoryname }}
        </span>
      </div>
    </div>  
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name:'TypeList',
    data() {
      return {
        selectType:0
      }
    },
    props:{
      typeList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.Tscroll,{
        click:true,
        scrollX:true,
      })
    },
    methods:{
      typeClick(index,typeId){
        this.selectType = index
        this.$emit("typeChange",typeId)
      }
    }
  }

</script>
<style lang="less" scoped>
  .typeList{
    height: 40px;
    display: flex;
    align-items: center;
    .scroll-wrapper{
      margin: 0 auto;
      width: 350px;
      white-space: nowrap;
      overflow: hidden;
      .scroll-content{
        display: inline-block;
        height: 40px;
        padding-top: 4px;
        span{
          display: inline-block;
          margin: 0 8px;
          padding-bottom: 2px;
          color: rgb(100, 97, 97);
          font-size: 15px;
        }
        .active{
          color: #F89734;
          border-bottom: 2px solid #F89734;
        }
      }
    } 
  }
  
</style>
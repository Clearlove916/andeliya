<template>
  <div class="topBar">
    <top-tabbar-list>
      <div slot="left" class="left" v-if="!inputFlag">
        <img src="~assets/images/home/common/location.png" alt="">
        <span>洛阳</span>
      </div>
      <div slot="left" class="left exit" v-else @click="exitSearch">
        <img src="~assets/images/home/common/删除.svg" alt="">
      </div>
      <div slot="center" class="center" v-if="!inputFlag">
        <h2>安德莉亚</h2>
      </div>
      <div slot="center" class="center" v-else>
        <input type="text" class="search" v-model="goodsName" placeholder="请输入你要搜索的内容">
      </div>
      <div slot="right" class="right" @click="search">
        <img src="~assets/images/home/common/search.png" alt="">
      </div>
    </top-tabbar-list>
  </div>
</template>

<script>
  import TopTabbarList from 'components/content/topTabbar/topTabbarList'

  export default {
    name:'TopBar',
    data () {
      return {
        inputFlag:false,
        goodsName:''
      }
    },
    components:{
      TopTabbarList
    },
    methods:{
      //搜索商品事件
      search(){
        if(this.inputFlag){
          if(this.goodsName != ''){
            this.$emit('searchGoods',this.goodsName)
          }else{
            this.inputFlag = !this.inputFlag
            this.goodsName = ''
            this.$emit('goodInit')
          }
        }else{
          this.inputFlag = !this.inputFlag
        }     
      },
      //推出搜索商品事件
      exitSearch(){
        this.inputFlag = !this.inputFlag
        this.goodsName = ''
        this.$emit('goodInit')
      }
    }
  }

</script>
<style lang="less" scoped>
  .topBar{
    background-color: white;
    
    .left{
      img{
        width: 3.2vw;
        height: 2.1739vh;
        vertical-align: middle;
      }
      span{
        font-size: 3.4667vw;
        font-family: "[PingFang]";
        vertical-align: middle;
        padding-left: 3px;
      }
      .exit{
        img{
          width: 22px;
          height: 22px;
        }   
      }
    }
    .center{
      h2{
        margin: 0;
        font-size: 4.8vw;
      }
      .search{
        border: none;
        background-color: rgb(230, 226, 226);
        width: 230px;
        height: 25px;
        border-radius: 15px;
        padding-left: 15px;
        font-size: 11px;
        color: black;
        outline: none;
      }
    }
    .right{
      img{
        width: 4.95vw;
        height: 2.8486vh;
      }
    }
  }
</style>
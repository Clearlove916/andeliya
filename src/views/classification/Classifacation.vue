<template>
  <div class="classification">
    <top-bar></top-bar>  
    <type-list :typeList="typeList" @typeChange="typeChange"></type-list>
      <div class="content">
        <div class="imgBox">
          <img src="../../assets/images/home/common/Red-bean-cake.png" alt="">
        </div>
        <scroll class="scroll" ref="scroll" @pullUpLoad="loadMore">
          <good-list :goodList="goodListShow.list"></good-list>
        </scroll>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import Scroll from 'components/common/better-scroll/Scroll'
  import BottomBar from 'components/content/btmTabbar/btmTabbar'
  import GoodList from 'components/content/Goods/GoodList'

  import TopBar from './childComponents/TopBar'
  import TypeList from './childComponents/TypeList'

  import {getCategoiry,getGoods} from 'network/classification'

  export default {
    name:'Classification',
    data() {
      return {
        typeList:[],
        typeId:0,
        goodListShow:{page:0,list:[]}
      }
    },
    components:{
      Scroll,
      BottomBar,
      GoodList,
      TopBar,
      TypeList
    },
    created(){
      this.getHomeGoods()

      this.getCategoiry()
    },
    activated(){
      this.$refs.scroll.refresh();
    },
    methods:{

      //网络请求

      //获取商品类型列表

      getCategoiry(){
        getCategoiry().then(res=>{
          function sortId(a,b) {
            return a.id - b.id
          }
          this.typeList = res.data.table.sort(sortId)
        })
      },

      //下拉加载商品函数
      loadMore(){
        if(this.goodListShow.page >= 4){
          return
        }
        this.getHomeGoods()
        this.$refs.scroll.refresh();
      },

      //获取商品函数
      //获取商品函数
      getHomeGoods(){
        let page = this.goodListShow.page + 1;
        let num = 4
        getGoods(num,page,1,this.typeId).then(res=>{
          if(res){
            this.goodListShow.list.push(...res.data)
            this.goodListShow.page += 1 
            this.$refs.scroll.finishPullUp();
            this.$refs.scroll.refresh();
          }else{
            console.log("商品已经加载完了")
          }       
        })
      },
      
      typeChange(typeId){
        this.typeId = typeId
      }
    }
  }

</script>
<style lang="less" scoped>
.classification{
  .content{
    padding: 0 10px;
    background-color: #f5f5f5;
    .imgBox{
      border-radius: 15px;
      overflow: hidden;
      height: 250px;
      img{
        width:100%;
      }
    }
    .scroll{
      height: 290px;
      overflow: hidden;
      margin-top: 10px;
      padding: 0 5px;
    }
  }
}
</style>
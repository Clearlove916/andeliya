<template>
  <div class="selectShop">
    <top-tabbar-list class="topBar">
      <img slot="left" src="~assets/images/common/返回.svg" @click="back" alt="">
      <input class="userAddress" slot="center" type="text" placeholder="请输入位置">
      <img slot="right" class="addAddress" src="~assets/images/selectThop/common/地图.svg" alt="">
    </top-tabbar-list>
    <div class="mapBox">
      <el-amap :zoom="zoom" :center="center" :plugin="plugin">
        <el-amap-marker vid="marker" 
          :position="center" 
           >
        </el-amap-marker>
      </el-amap>
    </div>
    <shopItem v-for="(item,index) in 2" :key="index"></shopItem>
    <common-btn class="selectShopBtn"  message="确认"></common-btn>
  </div>
</template>

<script>

  import TopTabbarList from 'components/content/topTabbar/topTabbarList'
  import CommonBtn from 'components/content/commonBtn/commonBtn'

  import ShopItem from './childComponents/shopItem'


  export default {
    name:'SelectShop',
    data () {
      let self = this
      return {
        zoom: 12,
        center: [120.011574, 30.286369],
        plugin: [{
            pName: 'Geolocation',
            showMarker:false,
            events: {
              init(o) {
                //定位成功 自动将marker和circle移到定位点
                o.getCurrentPosition((status, result) => {
                  console.log(result);
                  if (result && result.position) {
                    self.center=[result.position.lng,result.position.lat]
                  }else{
                    console.log(`定位失败`)
                  }
                });
              }
            }
          }]
      }
    },
    components:{
      TopTabbarList,
      ShopItem,
      CommonBtn
    },
    created(){
    },  
    mounted(){
      console.log(window.sessionStorage.id)  //可以获取到经纬度
    },
    methods:{
      back(){
        this.$router.back()
      }
    }
  }

</script>
<style lang="less" scoped>
  .selectShop{
    .topBar{
      margin-top: 4px;
      img{
        width: 26px;
        height: 26px;
      }
      .userAddress{
        height: 35px;
        width: 250px;
        border-radius: 20px;
        border: 1px solid rgb(238, 238, 238);
        color: rgb(216, 216, 216);
        outline: none;
        padding-left: 25px;
        box-shadow: rgb(238, 238, 238) 0px 0px 8px 5px;
      }
      input::-webkit-input-placeholder{
        color: rgb(177, 177, 177);
      }
    }
    .mapBox{
      height: 270px;
      width: 100%;
      margin-top: 15px;
      background-color: #f3f3f3;
    }
    .selectShopBtn{
      margin-top: 20px;
    }
  }
</style>
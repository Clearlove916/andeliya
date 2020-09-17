<template>
  <div class="spAddress">
    <top-tabbar-list class="topBar">
      <img slot="left" src="~assets/images/common/返回.svg" alt="" @click="back">
      <h3 slot="center">收货地址</h3>
      <img slot="right" class="addAddress" src="~assets/images/address/common/add.svg" alt="" @click="addAddress">
    </top-tabbar-list>
    <scroll class="scroll" ref="scroll">
      <address-Item v-for="(item,index) in this.$store.state.address" :key="index" :addressItem="item">       
      </address-Item>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/better-scroll/Scroll'

  import TopTabbarList from 'components/content/topTabbar/topTabbarList'

  import AddressItem from './childComponents/AddressItem'

  export default {
    name:'SpAddress',
    data() {
      return {
        address:[]
      }
    },
    components:{
      TopTabbarList,
      Scroll,
      AddressItem
    },
    created(){
      this.address = this.$store.state.address
    },
    methods:{
      back(){
        this.$router.back()
      },
      //添加收货地址
      addAddress(){

      }
    }
  }

</script>
<style lang="less" scoped>
.spAddress{
  .topBar{
    height: 44px;
    img{
      width: 24px;
    }
    h3{
      font-size: 19px;
    }
    .addAddress{
      width: 28px;
      height: 28px;
    }
  }
  .scroll{
    height: calc(100vh - 15px);
    background-color: #eeeeee;
    overflow: hidden;   
    padding: 0 12px;
    padding-top: 15px;
  }
} 
</style>
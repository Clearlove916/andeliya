<template>
  <div class="miniSwiper" v-if="newsList && newsList.length > 0">
    <img src="../../../assets/images/home/common/radio-broadcast.png" alt="">
    <up-down-swiper ref="swiper" class="swiper">
      <div slot="swiper" class="swiper-slide" v-for="(item,index) in newsList" :key="index">
        <span class="textbox">{{item.title}}</span> 
      </div>
    </up-down-swiper>   
  </div>
</template>

<script>
  import UpDownSwiper from 'components/common/swiper/UpDownSwiper'

  export default {
    name:'MiniSwiper',
    props:{
      newsList:{
        type:Array,
        default(){
          return []
        }  
      }
    },
    components:{
      UpDownSwiper
    },
    // activated(){
    //   this.$refs.swiper.initswiper()
    // },
  }

</script>
<style lang="less" scoped>
  .commoncss{
    display: flex;
    align-items: center;
  }
  .miniSwiper{
    .commoncss();
    height: 20px;
    overflow: hidden;
    
    .swiper{
      width: 100%;
      height: 20px;
      .swiper-slide{
        .commoncss();
        .textbox{
          padding-left: 10px;
          font-size: 2.6667vw;
          color: #727272;
        }
      } 
    }
    img{
      width: 3.7333vw;
      height: 1.7991vh;
    }
  }
</style>
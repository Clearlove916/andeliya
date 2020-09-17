<template>
  <div class="homeSwiper" v-if="swiperImg && swiperImg.length > 0">
    <about-swiper ref="swiper">
      <div slot="swiper" class="swiper-slide" v-for="(item,index) in swiperImg" :key="index">
        <img :src="item.url">
      </div>
    </about-swiper>   
  </div>
</template>

<script>
  import AboutSwiper from 'components/common/swiper/AboutSwiper'

  export default {
    name:'HomeSwiper',
    props:{
      swiperImg:{
        type:Array,
        default(){
          return []
        }
      }
    },
    // activated(){
    //   this.$refs.swiper.initswiper()
    // },
    components:{
      AboutSwiper
    }
  }

</script>
<style lang="less" scoped>
  .homeSwiper{
    img{
      width: 100%;
      height: 24.4378vh;
      border-radius: 10px;
    } 
  }
  
</style>
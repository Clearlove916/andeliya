<template>
  <div class="detailSwiper" v-if="swiperImg && swiperImg.length > 0">
    <about-swiper>
      <div slot="swiper" class="swiper-slide" v-for="(item,index) in swiperImg" :key="index">
        <img :src="item">
      </div>
    </about-swiper>   
  </div>
</template>

<script>
  import AboutSwiper from 'components/common/swiper/AboutSwiper'
  

  export default {
    name:'DetailSwiper',
    props:{
      swiperImg:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      AboutSwiper
    }
  }

</script>
<style scoped>
  img{
    width: 100%;
    height: 200px;
  } 
</style>
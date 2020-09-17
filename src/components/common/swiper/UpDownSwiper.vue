<template>
  <div class="swiper-container swiper-container2">
     <div class="swiper-wrapper">
        <slot name="swiper"></slot>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import '../../../../node_modules/swiper/dist/css/swiper.css'

  export default{
    name:'CommonSwiper',
    mounted(){
      this.initswiper()
    },
    methods: {
      initswiper(){
        var mySwiper = new Swiper('.swiper-container2', {
          speed:2000,
          direction:'vertical',
          autoplay:{
            delay:2000,
            disableOnInteraction: false
          },
          loop:true,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
          },
          observer: true, 
        })
      }
    }, 
  }
</script>
<style scoped>
</style>
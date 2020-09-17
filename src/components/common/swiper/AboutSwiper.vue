<template>
  <div class="swiper-container swiper-container1">
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
    data () {
      return {
        mySwiper: null
      }
    },
    mounted(){
      this.initswiper()
    },
    methods: {
      initswiper(){
        this.mySwiper = new Swiper('.swiper-container1', {
          speed:800,
          direction:'horizontal',
          autoplay:{
            delay:2000,
            disableOnInteraction: false
          },
          loop:true,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
          },
          freeMode : false,
          observeParents:false,
          observer:true,
        })
      }
    }, 
  }
</script>
<style scoped>

</style>
<template>
  <div class="scroll" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'

  export default{
    name:'Scroll',
    data() {
      return {
        scroll:null
      }
    },
    props:{
      probeType:{
        type:Number,
        default(){
          return 3
        }
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.scroll,{
        click:true,
        probeType:3,
        pullUpLoad:{
           threshold: -10
        },
        scrolllY:true
      })

      if(this.probeType === 2 || this.probeType == 3){
        this.scroll.on('scroll',(position)=>{
          this.$emit("sendPosition",position);
        })
      }

      this.scroll.on('pullingUp',()=>{
        this.$emit('pullUpLoad')
      })
      
    },
    methods: {
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp();
      },
      getScolly(){
        return this.scroll ? this.scroll.y:0;
      }
    },
  }
</script>
<style scoped>
  .content{
    padding-top: 1px;
  }
</style>
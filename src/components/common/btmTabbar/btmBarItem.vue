<template>
  <div class="btmBarItem" @click="barItmeClick">
    <slot name="activeImg" v-if="active"></slot>
    <slot name="commonImg" v-else></slot>
    <div class="text" :style="activetext">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'BtmBarItem',
    props:{
      path:{
        type:String,
        default(){
          return ""
        }
      },
      textColor:{
        type:String,
        default(){
          return ""
        }
      }
    },
    computed: {
      active(){
        return this.$route.path.indexOf(this.path) !== -1  
      },
      activetext(newVal,oldVal){
        return this.active ? {color:this.textColor} : {}
      }
    },
    methods: {
      barItmeClick(){
        this.$router.push(this.path).catch(res=>res)
      }
    },
  }

</script>
<style lang="less" scoped>
  .btmBarItem{
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
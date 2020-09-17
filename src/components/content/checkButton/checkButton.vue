<template>
  <div class="checkButton">
    <img :class="{checked:isChecked}" src="~assets/images/shopCar/CheckButton.svg" alt="">
  </div>
</template>
<script>
  export default{
    name:'CheckButton',
    data() {
      return {
       
      }
    },
    props:{
      isChecked:{
        type:Boolean,
        default(){
          return false
        }
      }
    },
    methods: {
    },
  }
</script>
<style scoped>
  img{
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border:  1px solid #aaaaaa;
    background-color: white;
  }
  .checked{
    background-color: rgb(255, 129, 150);
    border:  1px solid red;
  }
</style>
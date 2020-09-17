<template>
  <div class="loginBtn">
    {{message}}
  </div>
</template>

<script>
  export default {
    name:'CommonBtn',
    props:{
      message:{
        type:String,
        default(){
          return ''
        }
      }
    }
  }

</script>
<style lang="less" scoped>
  .loginBtn{
    width: 280px;
    height: 45px;
    margin: 0 auto;
    background-color: rgb(252, 128, 138);
    border-radius: 25px;
    line-height: 45px;
    text-align: center;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
}
</style>
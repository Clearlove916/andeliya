<template>
  <div class="spAddress">
    <div class="address">
      <div class="nameAndphone">
        <span class="name">{{Spaddress.name}}</span>
        <span class="phone">{{Spaddress.phone}}</span>
      </div>
      <div class="location">
        {{Spaddress.location}}
      </div>
    </div>
    <img src="~assets/images/payment/common/更多.svg" alt="">
  </div>
</template>

<script>
  export default {
    name:'SpAddress',
    data() {
      return {
        Spaddress:{}
      }
    },
    created(){
      this.Spaddress = this.$store.getters.getAddress
    },
    activated(){
      this.Spaddress = this.$store.getters.getAddress
    }
  }

</script>
<style lang="less" scoped>
  .spAddress{
      height: 74px;
      width: 93%;
      background-color: white;
      margin: 10px auto;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img{
        margin-right: 20px;
        width: 28px;
        height: 28px;
      }
      .nameAndphone{
        display: flex;
        align-items: center;
        height: 30px;
        span{
          padding-left: 15px;
          font-size: 17px;
        }
      }
      .location{
        font-size: 13px;
        margin-left: 15px;
        color: #8b8b8b;  
      }
    }
</style>
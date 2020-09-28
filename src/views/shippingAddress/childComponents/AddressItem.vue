<template>
  <div class="addressItem">
    <div class="addressInfo" @click="selectAddress">
      <div class="nameAndphone">
        <span class="name">{{addressItem.name}}</span>
        <span class="phone">{{addressItem.phone}}</span>
      </div>
      <div class="location">
        {{addressItem.location}}
      </div>
    </div>
    <div class="operation">
      <div class="defaultAddress">
        <check-button @click.native="defaultAddress" :isChecked="addressItem.type === 1"></check-button>
        <span>设为默认</span>
      </div>
      <div class="editAndDel">
        <div class="edit">
          <img src="~assets/images/address/common/edit.svg" alt="">
          <span>编辑</span>
        </div>
        <div class="del" @click="delAddress">
          <img src="~assets/images/address/common/del.svg" alt="">
          <span>删除</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/checkButton.vue'

  export default {
    name:'AddressItem',
    props:{
      addressItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    components:{
      CheckButton
    },
    methods:{
      //删除地址
      delAddress(){
        this.$commontoast.show('确定要删除该地址吗',this.addressItem.id,'',this.$store,'address');
      },

      //修改默认地址
      defaultAddress(){
        this.$store.commit('defaultAddress',this.addressItem.id)
      },

      //选择收货地址
      selectAddress(){
        this.$store.commit('changeAddress',this.addressItem.id)
        this.$router.back()
      }
    }
  }

</script>
<style lang="less" scoped>
  .common{
    display: flex;
    align-items: center;
  }
  .addressItem{
    height: 130px;
    background-color: white;
    margin-bottom: 12px;
    border-radius: 10px;
    .addressInfo{
      height: 74px;
      border-bottom: 1px solid #f4f4f4;  
      .nameAndphone{
        .common();
        height: 45px;
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
    .operation{
      height: 55px;
      .common();
      justify-content: space-between;
      padding: 0 15px;
      .defaultAddress{
        display: flex;
        span{
          margin-left: 10px;
          font-size: 14px;
          color: #8b8b8b;  
        }
      }
      .editAndDel{
        .common();
        div{
          .common();
          span{
            font-size: 14px;
            color: #8b8b8b;  
            margin-left: 10px;
          }
        }
        div:last-child{
          margin-left: 20px;
          img{
            width: 18px;
            height: 18px;
          }
        }
      }
    }
  }
</style>
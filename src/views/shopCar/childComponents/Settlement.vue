<template>
  <div class="settlement">
    <div class="selectAll">
      <check-button @click.native="selectAll"
       :is-checked="isSelectAll" class="checkButton"></check-button>
      <span>全选</span>
    </div>
    <div class="total">
      <div class="allPrice">
        <span>合计</span><span>￥{{$store.state.totalPrice}}</span>
      </div>
      <div class="totalBtn" @click="buy">
        结算
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/checkButton.vue'

  export default {
    name:'Settlement',
    data() {
      return {
        flag:true
      }
    },
    components:{
      CheckButton
    },
    computed:{
      isSelectAll(){
        return this.$store.getters.isOrNoSelect
      }
    },
    methods:{
      //选中所有商品
      selectAll(){
        this.$store.commit('selectAllGoods')
        this.$store.commit('coupuedPrice')
      },

      //在购物车内购买商品
      buy(){
        if(this.$store.getters.backSeltGoods.length === 0){        
          this.$toast.show('你还没有选中任何商品',2000);
        }else{
          this.$router.push({
            name:'payment',
            params:{
              type:0
            }
          })
        }
      }
    }
  }

</script>
<style lang="less" scoped>
  .settlement{
    display: flex;
    bottom: 51px;
    left: 0;
    right: 0;
    height: 49px;
    justify-content: space-between;
    .selectAll{
      display: flex;
      align-items: center;
      padding-left: 15px;
      span{
        padding-left: 5px;
        padding-bottom: 3px;
      }
    }
    .total{
      display: flex;
      align-items: center;
      padding-right: 15px;
      .allPrice{
        padding-right: 15px;
        span:last-child{
          color: red;
        }
      }
      .totalBtn{
        width: 90px;
        height: 40px;
        background-color: rgb(255, 72, 0);
        line-height: 40px;
        text-align: center;
        border-radius: 25px;
        font-size: 14px;
        color: white;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
    }
  }
</style>
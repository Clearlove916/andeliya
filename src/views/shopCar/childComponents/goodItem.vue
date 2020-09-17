<template>
  <div class="goodItem">
    <check-button @click.native="goodItemSelct" :isChecked="goods.select"></check-button>
    <img :src="goods.imageurl" alt="">
    <div class="goodMation">
      <div class="title">
        <h3>{{ goods.name }}</h3>
        <img @touchstart="delGoods" @touchend="clearLoopd" src="~assets/images/shopCar/common/删除.svg" alt="">
      </div>
      <span>{{ goods.type }}</span>
      <div class="priceAndNum">
        <h3>￥{{ goods.stock }}</h3>
        <div class="addAndReduce">
          <span @click="reduceGoods">-</span>
          <input type="text" :value="goods.number">
          <span @click="addGoods">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/checkButton.vue'

  import {delShopCar} from 'network/shopCar'

  export default {
    name:'goodItem',
    data() {
      return {
        timer:null
      }
    },
    props:{
      goods:{
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
      //设置购物车的商品为选中状态,同时计算总价
      goodItemSelct(){    
        this.$store.commit('goodsSelect',this.goods.id)
        this.$store.commit('coupuedPrice')
      },
      //购物车商品减少方法
      reduceGoods(){
        this.$store.commit('reduceGoods',this.goods.id)
        this.$store.commit('coupuedPrice')
      },
      //购物车商品增加的方法
      addGoods(){
        this.$store.commit('addGoods',this.goods.id)
        this.$store.commit('coupuedPrice')
      },
      //删除购物车中的商品
      delGoods(){
        if(this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(()=>{ 
          delShopCar(this.$store.state.uid,this.$store.state.token,this.goods.id).then(res=>{
            if(res){
              this.$store.commit('delGoods',this.goods.id)
              this.$store.commit('coupuedPrice')
              this.$toast.show('删除成功',2000);
            }else{
              this.$toast.show('删除失败',2000);
            }
          })

          
        },1500)
      },
      clearLoopd(){
        clearTimeout(this.timer)
      }
    }
  }

</script>
<style lang="less" scoped>
  .goodItem{
    height: 76px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    padding: 12px 10px 12px 7px;
    img{
      width: 76px;
      height: 76px;
      margin-left: 10px;
    }
    .goodMation{
      height: 76px;
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      .title{
        display: flex;
        justify-content: space-between;
        h3{
          margin: 0;
          font-size: 15px;
        }
        img{
          width: 15px;
          height: 15px;
        }
      }   
      span{
        font-size: 10px;
        color: #747474;
        margin-top: 2px;
      }
      .priceAndNum{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        width: 203px;
        h3{
          color: red;
          font-size: 14px;
          margin: 0;
        }
        .addAndReduce{
          display: flex;
          align-items: center;
          span{
            width: 20px;
            height: 17px;
            border: 1px solid #aaaaaa;
            line-height: 13px;
            text-align: center;   
            margin-top: 0;  
            font-size: 16px;   
            color: #aaaaaa;   
          }
          span:first-child{
            border-right: none;
            border-radius: 5px 0 0 5px;
          }
          span:last-child{
            border-left: none;
            border-radius: 0 5px 5px 0;
          }
          input{
            width: 32px;
            height: 13px;
            text-align: center;
          }
        }
      }
    }
  }
</style>
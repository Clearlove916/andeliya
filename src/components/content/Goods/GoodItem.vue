<template>
  <div class="goodItem">
    <img :src="goodItem.imageurl" alt="" @click="goodItemClick">
    <div class="goodExplain">
      <span class="name">{{ goodItem.name }}</span>
        <div class="bottom">
          <span class="price">￥{{ goodItem.stock }}</span> 
          <span @click="addToShopCar"><img src="~assets/images/home/common/Shopping-Cart-small.png" alt=""></span>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'GoodItem',
    props:{
      goodItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      //点击商品跳转到商品详情页
      goodItemClick(){
        this.$router.push({
          name:'detail',
          params:{
            name:this.goodItem.name
          }
        })
      },

      //加入购物车
      addToShopCar(){
        if(this.$store.state.token){
          let newGoods = {}
          newGoods.id = this.goodItem.id
          newGoods.imgUrl = this.goodItem.imageurl
          newGoods.name = this.goodItem.name
          newGoods.type = this.goodItem.categoryname
          newGoods.price = this.goodItem.stock
          newGoods.number = 1
          newGoods.select = false
          this.$store.commit('putGoodsToShopCAr',newGoods)
          this.$toast.show('加入购物车成功',2000);
        }else{
          this.$router.push('/login')
        }
      }
    }
  }

</script>
<style lang="less" scoped>
  .goodItem{
    background-color: white;
    margin-bottom:7px;
    border-radius: 5px;
    img{
      height: 19.4903vh;
      width: 44vw;
    }
    .goodExplain{
      display: flex;
      flex-direction: column;
      margin-top: 1.3493vh;
      padding: 0 9px 5px 9px;
      .name{
        font-size: 4vw;
        font-weight: 600;
        color: #030202;
      }
      .bottom{
        margin-top: 4px;
        display: flex;
        justify-content: space-between;
        .price{
          font-size: 4vw;
          color: #fb0606;
        }
        img{
          width: 3.2vw;
          height: 1.8741vh;
        }
      }
    }
  }
</style>
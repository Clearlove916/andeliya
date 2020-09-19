export default{
  //判断商品是否全被选中
  isOrNoSelect(state){
    let count = 0
    state.shopCar.forEach(item=>{
      if(item.select){
        count++
      }
    })
    if(state.shopCar.length === 0){
      state.totalPrice = 0
      return false
    }else if(count === state.shopCar.length){
      return true
    }else{
      return false
    }
  },

  //获取购物车中所有被选中的商品
  backSeltGoods(state){
    let goodsList = []
    state.shopCar.forEach(item=>{
      if(item.select){
        goodsList.push(item)
      }
    })
    return goodsList
  },

  //获取选中的收货地址
  getAddress(state){
    let address
    state.address.forEach(item=>{
      if(item.select === true){
        address = item
      }
    })
    return address
  },
}
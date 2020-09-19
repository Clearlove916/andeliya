export default{
  //根据商品id修改商品的选中状态
  goodsSelect(state,payload){
    state.shopCar.forEach(item=>{
      if(item.id === payload){
        item.select = !item.select
      }
    })
    return
  },
  //将所有的商品设置为选中状态或全部选中
  selectAllGoods(state){
    let count = 0
    state.shopCar.forEach(item=>{
      if(item.select){
        count++
      }
    })
    if(count === state.shopCar.length){
      state.shopCar.forEach(item=>{
        item.select = false
      })
    }else{
      state.shopCar.forEach(item=>{
        item.select = true
      })
    }
    return
  },
  //计算总的钱数
  coupuedPrice(state){
    state.totalPrice = 0
    state.shopCar.forEach(item=>{
      if(item.select){
        state.totalPrice += parseInt(item.stock) * item.number
      }
    })
    return
  },

  //添加商品到购物车
  putGoodsToShopCAr(state,payload){
    let flag = false
    state.shopCar.forEach(item=>{
      if(item.id === payload.id){
        flag = true
        item.number += 1
      }
    })
    if(!flag){
      state.shopCar.push(payload)
    }
    
    return
  },

  //在购物车内添加商品数量
  addGoods(state,payload){
    state.shopCar.forEach(item=>{
      if(item.id === payload){
        item.number += 1
      }
    })
    return
  },
  //在购物车内减少商品数量
  reduceGoods(state,payload){
    state.shopCar.forEach(item=>{
      if(item.id === payload){
        if(item.number <= 1){
          return
        }else{
          item.number -= 1
        }
      }
    })
    return
  },
  //删除购物车中的商品
  delGoods(state,payload){
    state.shopCar = state.shopCar.filter(item=>{
      return item.id !== payload
    })
  },

  //在购物车内购买选中的商品后，删除已经购买过的商品
  delGoodsOfSel(state){
    state.shopCar = state.shopCar.filter(item=>{
      return item.select === false
    })
  },

  //点击立即购买或者在购物车内购买选中的商品后，将商品加入未支付订单
  addOrderToWaitSell(state,payload){
    state.payOrder = []
    let time = new Date()
    let year = (time.getFullYear()).toString()
    let month = time.getMonth() >= 10 ? (time.getMonth()).toString() : "0" + (time.getMonth()).toString()
    let day = (time.getDate()).toString() >= 10 ? (time.getDate()).toString() : "0" + (time.getDate()).toString()
    if(payload === ''){
      state.shopCar.forEach(item=>{
        if(item.select){
          let order = {id:"",goods:{},state:0}
          order.id = year + month + day + "000" + (state.order.length + 1).toString()
          state.payOrder.push(order.id)
          order.goods.id = item.id
          order.goods.imageurl = item.imageurl
          order.goods.name = item.name
          order.goods.type = item.type
          order.goods.stock = item.stock
          order.state = 1
          state.order.push(order)
        }
      })
    }else{  
      payload.forEach(item=>{
        let goodsItem = {id:"",goods:{},state:0}
        goodsItem.id = year + month + day + "000" + (state.order.length + 1).toString()
        state.payOrder.push(goodsItem.id)
        goodsItem.goods.id = item.id
        goodsItem.goods.imageurl =item.imageurl
        goodsItem.goods.name = item.name
        goodsItem.goods.stock = item.stock
        goodsItem.goods.type = item.type
        goodsItem.state = 1
        state.order.push(goodsItem)
      })
    }
    
  },

  //将未订单修改成已支付订单

  //删除订单中的商品
  delOrder(state,payload){
    state.order = state.order.filter(item=>{
      return item.id !== payload
    })
    return
  },

  //删除收货地址
  delAddress(state,payload){
    state.address = state.address.filter(item=>{
      return item.id !== payload
    })
    return
  },

  //修改默认地址
  defaultAddress(state,payload){
    state.address.forEach(item=>{
      if(item.id === payload){
        item.type = 1
      }else {
        item.type = 0
      }
    })
    return
  },

  //修改收货地址
  changeAddress(state,payload){
    state.address.forEach(item=>{
      if(item.id === payload){
        item.select = true
      }else {
        item.select = false
      }
    })
    return
  },

  //修改用户的登录状态
  //记录用户的uid和token令牌
  changeStatus(state,payload){
    state.token = payload
  },
  preservationId(state,payload){
    state.uid = payload
  },

  //记录用户登陆前要打开的页面
  goRouter(state,payload){
    state.router = payload
  }
}
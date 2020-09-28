<template>
  <div class="toast" v-show="isshow">
    <div class="title">{{message}}</div>
    <div class="event">
      <div @click="confirm">确认</div>
      <div @click="cancel">取消</div>
    </div>
  </div>
</template>
<script>

  export default{
    name:'CommonToast',
    data() {
      return {
        isshow:false,
        message:'',
        id:'',
        store:null,
        type:'',
        operation:''
      }
    },
    methods: {
      show(message,orderOrAddressId,operation,store,type){
        this.isshow = true
        this.message=message;
        this.id = orderOrAddressId
        this.operation = operation
        this.store = store
        this.type = type
      },
      confirm(){
        if(this.type === 'order'){
          if(this.operation === 'cancel'){
            this.store.commit('cancelOrder',this.id)
          }
          if(this.operation === 'del'){
            this.store.commit('delOrder',this.id)
          }
          if(this.operation === 'accept'){
            this.store.commit('acceptOrder',this.id)
          }
        }else if(this.type === 'address'){
          this.store.commit('delAddress',this.id)
        }

        this.store.commit('changeKey')
        
        this.isshow = false

        
      },
      cancel(){
        this.isshow = false
      }
    },
  }
</script>
<style lang="less" scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: rgb(112, 112, 112);
    border: 2px solid white;
    transform: translate(-50%,-50%);
    width: 175px;
    height: 90px;
    color: white;
    z-index: 999;
    .title{
      text-align: center;
      border-bottom: 1px solid white;
      height: 25px;
      padding: 8px 10px;
    }
    .event{
      display: flex;
      div{
        flex: 1;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 16px;
      }
      div:first-child{
        border-right: 1px solid white;
      }
    }
  }
</style>
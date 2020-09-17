<template>
  <div class="login">
    <top-tabbar-list class="topBar">
      <img slot="left" src="~assets/images/common/返回.svg" alt="" @click="back">
      <h3 slot="center">用户登录</h3>
    </top-tabbar-list>
    <div class="headImg">
      <img src="../../assets/images/login/andeliya.jpg" alt="">
    </div>
    <h1>Andrea</h1>
    <div class="inputBox">
      <div class="account">
        <img src="~assets/images/login/手机.svg" alt="">
        <input type="text" v-model="account" placeholder="请输入会员/手机号">
      </div>
      <hr>
      <div class="password">
        <img src="~assets/images/login/密码.svg" alt="">
        <input type="text" v-model="password" placeholder="请输入密码">
      </div>
    </div>
    <common-btn class="loginBtn" @click.native="login" message="登录"></common-btn>
    <div class="register">
      <h5>你还没有账号?</h5>
      <h5 @click="register">立即注册</h5>
    </div>
    
  </div>
</template>

<script>
  import TopTabbarList from 'components/content/topTabbar/topTabbarList'
  import CommonBtn from 'components/content/commonBtn/commonBtn'

  import {Login} from 'network/login'

  export default {
    name:'Login',
    data() {
      return {
        account:'',
        password:'',
        path:null
      }
    },
    components:{
      CommonBtn,
      TopTabbarList
    },
    activated(){
      this.path = this.$route.params.path
    },
    methods:{
      back(){
        this.$router.back()
      },
      
      //点击注册事件
      register(){
        this.$router.push('/register')
      },

      // 点击登录事件
      login(){
        if(this.account === '' && this.password !== ''){
          this.$toast.show('账号不能为空',2000);
        }else if(this.password === '' && this.account !== ''){
          this.$toast.show('密码不能为空',2000);
        }else if(this.account === '' && this.password === ''){
          this.$toast.show('账号和密码不能为空',2000);
        }else{
          Login(this.account,this.password).then(res=>{
            if(res.data.status === 0){ 
              this.$store.commit('changeStatus',res.data.token)
              this.$store.commit('preservationId',res.data.table.id)
              if(this.path){
                this.$router.push(this.path)
              }else{
                this.$router.back()
              }
              
            }else if(res.data.status === 1){
              this.$toast.show('账号或者密码错误',2000);
            }
          })
        }
      }
    }
  }

</script>
<style lang="less" scoped>
  .login{
    .topBar{
      height: 44px;
      img{
        width: 24px;
      }
      h3{
        font-size: 19px;
      }
    }
    .headImg{
      width: 100vw;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      img{
        width: 160px;
        height: 120px;
      }
    }
    h1{
      text-align: center;
      margin: 10px 0 50px 0;
    }
    .inputBox{
      width: 280px;
      height: 101px;
      margin: 0 auto;
      border: 1px solid rgb(209, 209, 209);
      border-radius: 10px;
      hr{
        width: 85%;
        border: none;
        height: 1px;
        background-color: rgb(221, 220, 220);
        margin: 0 auto;
      }
      div{
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        input{
          width: 180px;
          height: 30px;
          border: none;
          color: rgb(173, 173, 173);
          font-size: 14px;
          outline: none;
        }
        input::-webkit-input-placeholder{
          color: #bfbfbf;
        }
        img{
          margin-right: 15px;
          height: 20px;
          width: 20px;
        }
      }
    }
    .loginBtn{
      margin-top: 20px;
    }
    .register{
      margin-top: 150px;
      h5{
        margin: 0;
        text-align: center;
      }
      h5:last-child{
        margin-top: 15px;
        color: rgb(211, 197, 7);
      }
    }
  }
  
</style>
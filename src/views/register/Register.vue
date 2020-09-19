<template>
  <div class="register">
    <top-bar></top-bar>
    <div class="userInfoMation">
      <div class="headImg">
        <img :src="headImg" alt="" @click="imgClick">
        <span>点击图片上传头像</span>
        <input type="file" class="uploadImg" ref="uploadImg" accept="image/gif,image/jpeg,image/png,image/jpg" @change="freshImg">
      </div>
      <div class="userName">
        <span>用户名</span>
        <input v-model="userName" type="text" placeholder="请输入用户名">
      </div>
      <div class="gendar">
        <span>性别</span>
        <input type="radio" name="sex" value="1" v-model="gendar">男
        <input type="radio" name="sex" value="0" v-model="gendar">女
      </div>
      <div class="phone">
        <span>手机号码</span>
        <input v-model="phone" type="text" maxlength="11" placeholder="请输入手机号码">
      </div>
      <div class="password">
        <span>密码</span>
        <input v-model="password" type="text" placeholder="请输入密码">
      </div>  
    </div>
    <common-btn @click.native="register" class="registerBtn" message="立即注册"></common-btn>
  </div>
</template>

<script>
  import TopBar from './childComponents/TopBar'

  import CommonBtn from 'components/content/commonBtn/commonBtn'

  import {Register,uploadImg} from 'network/register'


  import axios from 'axios'

  export default {
    name:'Register',
    data() {
      return {
        userName:'',
        phone:'',
        password:'',
        gendar:'1',
        user:{},
        headImg:require('../../assets/images/common/headImg.png'),
        formData:null
      }
    },
    components:{
      TopBar,
      CommonBtn
    },
    methods:{
      //上传头像
      imgClick(){
        this.$refs.uploadImg.dispatchEvent(new MouseEvent('click'))
      },
      freshImg(e){
        let _this = this
       // _this.imgObj = e.target.files['0']               //得到上传的第一个文件
        let fr = new FileReader()                        //异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容
        fr.onload=function(){                             //在读取操作完成时触发
          _this.headImg = fr.result                       // 图片文件赋值给图片标签路径
          let files = e.target.files
          
          _this.formData = new FormData()
          _this.formData.append("action", "upresumefile");
          for (let i = 0; i < files.length; i++) {
            _this.formData.append("file[]", files[i]);
          }
        }
        
        // fr.readAsDataURL(_this.imgObj)                   //将读取到的文件编码成Data URL
        // _this.headTip=''     
      },

      //注册用户
      register(){
        let USERNAME_REGEXP = /^[a-zA-Z0-9_-]{4,16}$/
        let TEL_REGEXP = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
        let PASSWORD_REGEXP = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
        if(!(USERNAME_REGEXP.test(this.userName))){
          this.$toast.show('用户名格式应位为4到16位(字母，数字，下划线，减号)',4000);
        }else if(!(TEL_REGEXP.test(this.phone))){ 
          this.$toast.show('手机号格式不对',2000);
        }else if(!(PASSWORD_REGEXP.test(this.password))){
          this.$toast.show('密码格式应该为，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符(@#$%^&*)',5000);
        }else{
          this.user.username = this.userName
          this.user.gendar = parseInt(this.gendar)
          this.user.phone = this.phone
          this.user.pwd = this.password
          
          console.log(this.formData)

          axios.post("http://101.200.88.248:8044/users/imgupload",this.formData).then(res=>{
            let imgUrl = res.data.url
            this.user.imgurl = imgUrl

            Register(this.user)
          }).then(res=>{
            console.log(res)
          })
           
          
        }
      }
    }
  }

</script>
<style lang="less" scoped>
  .userInfoMation{
    .headImg{
      height: 160px!important;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      font-size: 14px;
      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid gray;
      }
      .uploadImg{
        display: none;
      }
    }
    .gendar{
      input{
        width: 15px;
        height: 15px;
      }
      input:last-child{
        margin-left: 20px;
      }
    }
    div{
      height: 50px;
      display: flex;
      align-items: center;
      span{
        width: 120px;
        padding-left: 15px;
      }
      input{
        border: none;
        height: 40px;
        width: 200px;
        outline: none;
      }
      input::-webkit-input-placeholder{
        color: #bfbfbf;
      }
    }
  }
  .registerBtn{
    margin-top: 150px;
  }
</style>
<template>
  <div class="register">
    <Header class="header" title="注册账户"/>
     <div class="main">
       <div class="main flex column content-center">
         <div class="background flex">
          <img class="img" src="~@/common/images/signin_cg_normal_6@3x.png" alt="">
        </div>
       </div>
       <div class="content">
         <Input
          v-model="username"
          placeholder="请输入用户名"
          :src="require('@/common/icon/signin_name_normal_1@3x.png')"
          class="input"/>
          <div class="inputCode flex" @click="getCode">
            <div class="text">点击更换验证码</div>
            <div class="conCode" v-text="giveCode">
            </div>
          </div>
          <Input
          v-model="Code"
          placeholder="请输入验证码"
          type="text"
          :src="require('@/common/icon/signin-profect.png')"
          class="input"/>
          <Input
          v-model="password"
          placeholder="请输入密码"
          type="password"
          :src="require('@/common/icon/signin_password_normal_2@3x.png')"
          class="input"/>
           <Input
          v-model="rePassword"
          placeholder="请确认密码"
          type="password"
          :src="require('@/common/icon/signin_password_normal_2@3x.png')"
          class="input"/>
          <div class="tip">{{tip}}</div>
        <button
          @click="login"
          class="btn">
          注册账户
        </button>
       </div>
    </div>
  </div>
</template>
<script>
"use strict";
import Header from "@/components/Header";
import Input from '@/components/Input';
export default {
  name: "Register",
  components: {
    Header,
    Input
  },
  data () {
    return {
      username: "",
      password: "",
      rePassword:"",
      giveCode:"",
      Code:"",
      tip: ''
    }
  },
  mounted(){
    this.getCode()
  },
   methods: {
    getCode(){
      var num="";
      for(var i=0;i<4;i++){
        num+=Math.floor(Math.random()*10)
      }
      this.giveCode=num
    },
    login(){
      if (!this.username) {
        this.tip = "请输入用户名！";
        return;
      }
      if (this.giveCode != this.Code) {
        this.tip = "请输入正确的验证码！";
        return;
      }
      if (this.password && (this.password != this.rePassword)) {
        this.tip="两次密码输入不一致";
      }
    }
  }
};
</script>

<style scoped lang="stylus">
.header
  position relative
.main
  margin-top 2rem
  .background
    margin 0 8rem
    .img
      width 100%
      height 100%
  .content
    box-sizing border-box
    margin 1rem auto
    padding 0 1.5rem    
    width 100%
    .inputCode
      margin-top 2.4rem
      height 4rem
      border-radius 4rem
      text-align center
      line-height 4rem 
      color #ffffff
      font-size 1.8rem
      .text
        text-align center
        color #c1c1c1
        margin-left 20%
      .conCode
        padding-left 2rem 
        padding-right 2rem
        background #ff859c 
        text-align center
        margin-left 5%
    .input
     margin-top 3rem
    .tip
      height 1.6rem
      line-height 1.6rem
      color #ff859c
      text-align right
      font-size 1.2rem
    .btn
      margin-top 2.0rem
      width 100%
      height 4rem
      color #ffffff
      font-size 1.8rem
      border-radius 4.5rem
      background #ff859c
  .btns
    margin-top 1.2rem
    .other
      color #ff947f
      font-size 1.2rem  
</style>

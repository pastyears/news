<template>
  <div class="login">
    <Header class="header" title="登录"/>
    <div class="main flex column content-center">
      <div class="background flex">
        <img class="img" src="~@/common/images/signin_cg_normal_6@3x.png" alt="">
      </div>
      <div class="content">
        <Input
          @input="getUserName"
          placeholder="请输入用户名"
          :src="require('@/common/icon/signin_name_normal_1@3x.png')"
          class="input"/>
        <Input
          @input="getPassword"
          placeholder="请输入密码"
          type="password"
          :src="require('@/common/icon/signin_password_normal_2@3x.png')"
          class="input"/>
        <button class="btn">登录</button>
        <div class="btns flex content-between">
          <button class="other">忘记密码</button>
          <button class="other">注册账号</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
"use strict";
import Header from '@/components/Header'
import Input from '@/components/Input'
export default {
  name: "Login",
  components: {
    Header,
    Input
  },
  methods: {
    getUserName (value) {
      console.log('用户名', value)
    },
    getPassword (value) {
      console.log('获取密码', value)
    }
  }
};
</script>

<style scoped lang="stylus">
.header
  position relative
.main
  margin-top 5rem
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
    .input
      margin-top 3rem
    .btn
      margin-top 3rem
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

<template>
  <div class="register">
    <Header class="header" title="这是莹莹同学的那啥"/>
    <div class="main">
      注册页面
    </div>
  </div>
</template>

<script>
"use strict";
import Header from '@/components/Header'

export default {
  name: "Register",
  components: {
    Header
  }
};
</script>

<style scoped lang="stylus">
.main
  margin-top 4.5rem
</style>

<template>
  <header class="header flex">
    <div
      @click="goBack"
      class="back flex items-center">
      <i class="icon"></i>
      <span>返回</span>
    </div>
    <div class="title flex-a flex items-center content-center">
      <em>{{title}}</em>
    </div>
  </header>
</template>

<script>
"use strict";
export default {
  name: "Header",
  props: {
    title: {type: String, default: ''}
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
};
</script>

<style scoped lang="stylus">
.header
  box-sizing border-box
  position fixed
  top 0
  padding 0 1rem
  width 100%
  max-width 750px
  height 4.5rem
  border-bottom 1px solid #dcdcdc
  .back
    width 10rem
    color #222222
    font-size 2rem
    .icon
      width 2.5rem
      height 2.5rem
      background url("~@/common/icon/icon-left.png")no-repeat center
      background-size 2.5rem 2.5rem
  .title
    margin-right 10rem
    font-size 2rem
</style>

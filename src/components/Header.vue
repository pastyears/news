<template>
  <div class="header flex">
    <div
      @click="goBack"
      class="back flex items-center">
      <i class="icon"></i>
      <span>返回</span>
    </div>
    <div class="title flex-a">
      {{title}}
    </div>
    <div
      @click="$emit('handle')"
      class="right flex">
      {{tip}}
    </div>
  </div>
</template>

<script>
"use strict";
export default {
  name: "Header",
  props: {
    title: {type: String, default: ''},
    tip: {type: String, default: '莹莹的收藏'}
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
  padding 0 1rem
  width 100%
  max-width 750px
  height 4.5rem
  background #ffffff
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
    // margin-right 10rem
    font-size 2rem
    line-height 4.5rem
    text-align center
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
  .right
    width 10rem
    text-align right
</style>

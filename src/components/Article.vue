<template>
<router-link
  to="/"
  tag="div"
  class="article flex content-between">
  <div class="left flex">
    <img :src="src" :alt="alt" class="img">
  </div>
  <div class="right flex-a flex column content-between">
    <em class="title">{{title}}</em>
    <div class="bottom flex content-between">
      <div class="answer">问答</div>
      <div class="comment flex items-center">
        <i class="icon"></i>
        <p>{{count}}</p>
      </div>
    </div>
  </div>
</router-link>
</template>

<script>
"use strict";
export default {
  name: "Article",
  props: {
    src: {type: String, default: ""},
    alt: {type: String, default: "图片"},
    title: {type: String, default: "为什么程序员用的都是Mac？"},
    count: {type: [String, Number], default: 0},
  }
};
</script>

<style scoped lang="stylus">
.article
  box-sizing border-box
  padding 1rem 2rem
  height 13rem
  .left
    width 14.4rem
    height 10.8rem
    .img
      width inherit
      height inherit
  .right
    margin-left 1.5rem
    .title
      max-height 8rem
      font-size 2rem
      text-aligin justify
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 3
      overflow hidden
    .answer
      color #bbbbbb
      font-size 1.2rem
    .comment
      color #999999
      font-size 1.2rem
      .icon
        margin-right .5rem
        width 1.5rem
        height 1.5rem
        background url("~@/common/icon/icon-comment.png")no-repeat center
        background-size 1.5rem 1.5rem
</style>

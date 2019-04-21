<template>
<footer class="footer flex items-center content-around">
  <div class="home">
    <router-link
      to="/home"
      class="link flex column">
      <i class="icon"></i>
      <span>首页</span>
    </router-link>    
  </div>
  <div class="hot">
    <router-link
      to="/hot"
      class="link flex column">
      <i class="icon"></i>
      <span>热门</span>
    </router-link>    
  </div>
  <div class="discover">
    <router-link
      to="/discover"
      class="link flex column">
      <i class="icon"></i>
      <span>发现</span>
    </router-link>    
  </div>
  <div class="mine">
    <router-link
      to="/mine"
      class="link flex column">
      <i class="icon"></i>
      <span>我的</span>
    </router-link>    
  </div>
</footer>
</template>

<script>
"use strict";
export default {
  name: "Footer",
  components: {}
};
</script>

<style scoped lang="stylus">
.footer
  box-sizing border-box
  position fixed
  bottom 0
  width 100%
  max-width 750px
  height 4.5rem
  background #ffffff
  border-top 1px solid #dcdcdc
  .link
    height 3.5rem
    color #999999
    text-aligin center
    font-size 1rem
    .icon
      margin-bottom .4rem
      width 2.2rem
      height 2.2rem
      min-height 2.2rem
  .router-link-active
    color #ff566b
  .home
    .icon
      background url('~@/common/icon/icon-home-default.png')no-repeat center
      background-size 100% 100%
    .router-link-active
      .icon
        background url('~@/common/icon/icon-home-active.png')no-repeat center
        background-size 100% 100%
  .hot
    .icon
      background url('~@/common/icon/icon-hot-default.png')no-repeat center
      background-size 100% 100%
    .router-link-active
      .icon
        background url('~@/common/icon/icon-hot-active.png')no-repeat center
        background-size 100% 100%
  .discover
    .icon
      background url('~@/common/icon/icon-discover-default.png')no-repeat center
      background-size 100% 100%
    .router-link-active
      .icon
        background url('~@/common/icon/icon-discover-active.png')no-repeat center
        background-size 100% 100%
  .mine
    .icon
      background url('~@/common/icon/icon-mine-default.png')no-repeat center
      background-size 100% 100%
    .router-link-active
      .icon
        background url('~@/common/icon/icon-mine-active.png')no-repeat center
        background-size 100% 100%
</style>

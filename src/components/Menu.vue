<template>
  <ul class="menu flex">
    <li class="link_wrap flex-a flex">
      <router-link
        to="/home"
        exact
        class="link flex-a flex items-center content-center">
        推荐
      </router-link>
    </li>
    <li class="link_wrap flex-a flex">
      <router-link
        to="/home/sociology"
        class="link flex-a flex items-center content-center">
        社会
      </router-link>
    </li>
    <li class="link_wrap flex-a flex">
      <router-link
        to="/home/science"
        class="link flex-a flex items-center content-center">
        科技
      </router-link>
    </li>
    <li class="link_wrap flex-a flex">
      <router-link
        to="/home/sports"
        class="link flex-a flex items-center content-center">
        体育
      </router-link>
    </li>
  </ul>
</template>

<script>
"use strict";
export default {
  name: "Menu",
  components: {}
};
</script>

<style scoped lang="stylus">
.menu
  margin 0 20px
  height 3.5rem
  .link_wrap
    &:nth-child(n+2)
      margin-left 1rem
    .link
      color #999999
      font-size 2rem
    .router-link-active
      color #ff566b
      background #ffffff
      border-radius .4rem
      box-shadow .4rem .4rem .4rem .2rem rgba(230, 230, 230, .8)
</style>

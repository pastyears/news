<template>
  <div class="banner flex">
    <img class="img flex-a" src="~@/common/images/banner1.jpg" alt="banner1">
  </div>
</template>

<script>
"use strict";
export default {
  name: "Banner",
  components: {}
};
</script>

<style scoped lang="stylus">
.banner
  box-sizing border-box
  margin 2rem
  overflow 12rem
  .img_wrap
    box-sizing border-box
  .img
    width 100%
    height 100%
</style>

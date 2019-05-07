<template>
  <Swipe class="banner">
    <SwipeItem class="item">
      <img src="~@/common/images/banner1.jpg" alt="">
    </SwipeItem>
    <SwipeItem class="item">
      <img src="~@/common/images/banner2.jpg" alt="">
    </SwipeItem>
    <SwipeItem class="item">
      <img src="~@/common/images/timg.jpg" alt="">
    </SwipeItem>
  </Swipe>
</template>

<script>
"use strict";
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  name: "Banner",
  components: {
    Swipe,
    SwipeItem,
  }
};
</script>

<style lang="stylus">

.banner
  height 14.5rem
</style>

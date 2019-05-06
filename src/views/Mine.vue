<template>
  <div class="mine flex column">
    <Header title="我的"/>
    <div class="content flex-a">
      是我的，还是我的
    </div>
    <VFooter />
  </div>
</template>

<script>
"use strict";
import Header from "@/components/Header";
import VFooter from "@/components/Footer";
export default {
  name: "Mine",
  components: {
    Header,
    VFooter
  }
};
</script>

<style scoped lang="stylus">
.mine
  height 100vh
</style>

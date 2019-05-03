<template>
  <div class="mine">
    <Header title="我的"/>
    是我的，还是我的
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

</style>

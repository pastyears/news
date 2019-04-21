<template>
  <div class="discover">
    <Header title="发现"/>
    <div class="content flex items-center content-center">
      <h2>发现了一个吃糖的乌龟</h2>
      <h2>或者一个日晒三杆的猪</h2>
    </div>
    <Footer />
  </div>
</template>

<script>
"use strict";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "Discover",
  components: {
    Footer,
    Header
  }
};
</script>

<style scoped lang="stylus">
.content
  color red
  font-size 2.4rem
</style>

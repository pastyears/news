<template>
  <div class="hot">
    <Header title="热门"/>
    <div class="content">
      <Article
        v-for="(item,index) in 10"
        :key="index"
        class="article"/>
    </div>
    <Footer />
  </div>
</template>

<script>
"use strict";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Article from "@/components/Article";

export default {
  name: "Hot",
  components: {
    Header,
    Footer,
    Article
  }
};
</script>

<style scoped lang="stylus">

</style>

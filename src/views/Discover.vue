<template>
  <div class="discover">
    <Header title="发现"/>
    <div class="content">
      <Article
        v-for="(item,index) in 20"
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
  name: "Discover",
  components: {
    Footer,
    Header,
    Article
  }
};
</script>

<style scoped lang="stylus">
.content
  overflow auto
</style>

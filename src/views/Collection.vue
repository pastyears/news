<template>
  <div class="discover">
    <Header title="收藏"/>
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
  name: "Collection",
  components: {
    Footer,
    Header,
    Article
  }
};
</script>

<style scoped lang="stylus">
.content
  box-sizing border-box
  padding-top 4.5rem
  overflow auto
</style>

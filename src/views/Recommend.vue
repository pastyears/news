<template>
  <div class="recommend">
    <Banner class="banner"/>
    <Article
      v-for="(item,index) in 10"
      :key="index"
      class="article"/>
  </div>
</template>

<script>
"use strict";
import Banner from "@/components/Banner";
import Article from "@/components/Article";

export default {
  name: "Recommend",
  components: {
    Banner,
    Article
  }
};
</script>

<style scoped lang="stylus">
.article
  &:nth-child(n+1)
    border-top 1px solid #ecebeb
</style>

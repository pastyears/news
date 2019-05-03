<template>
  <div class="recommend">
    <Banner class="banner"/>
    <Article
      v-for="(item,index) in newsList"
      :key="index"
      :src="item.News_images"
      :title="item.News_title"
      :count="item.News_count"
      class="article"/>
  </div>
</template>

<script>
"use strict";
import Banner from "@/components/Banner";
import Article from "@/components/Article";
import GetList from "@/mixins/getList";

export default {
  name: "Sports",
  mixins: [GetList],
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

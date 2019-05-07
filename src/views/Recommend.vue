<template>
<div
  v-infinite-scroll="getList"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="1">
  <Article
    v-for="(item,index) in newsList"
    :key="index"
    :src="item.News_images"
    :title="item.News_title"
    :count="item.News_count"
    :content="item.News_content"
    :cate="item.News_style"
    :id="item.News_id"
    class="article"/>
</div>
</template>

<script>
"use strict";
import Article from "@/components/Article";
import GetList from "@/mixins/getList";

export default {
  name: "Recommend",
  mixins: [GetList],
  components: {
    Article
  }
};
</script>

<style scoped lang="stylus">
.article
  &:nth-child(n+1)
    border-top 1px solid #ecebeb
</style>

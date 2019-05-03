<template>
<<<<<<< HEAD
  <div class="recommend">
    <Banner class="banner"/>
    <Article
      v-for="(item,index) in newsList"
      :key="index"
      :src="item.News_images"
      :title="item.News_title"
      :count="item.News_count"
=======
  <div class="sociology">
    <Banner class="banner"/>
    <Article
      v-for="(item,index) in 10"
      :key="index"
>>>>>>> c1406a78b6db8339d710939c0a8f1f6ca51c994d
      class="article"/>
  </div>
</template>

<script>
"use strict";
import Banner from "@/components/Banner";
import Article from "@/components/Article";
<<<<<<< HEAD
import GetList from "@/mixins/getList";

export default {
  name: "Sociology",
  mixins: [GetList],
=======

export default {
  name: "Sociology",
>>>>>>> c1406a78b6db8339d710939c0a8f1f6ca51c994d
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

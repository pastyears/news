<template>
  <div class="recommend">
    <Banner class="banner"/>
    <Article
<<<<<<< HEAD
      v-for="(item,index) in newsList"
=======
      v-for="(item,index) in 10"
>>>>>>> c1406a78b6db8339d710939c0a8f1f6ca51c994d
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
  name: "Recommend",
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

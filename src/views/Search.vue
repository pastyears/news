<template>
  <div class="search flex column">
    <Header title="搜索"/>
    <div class="content flex-a">
      <Article
        v-for="(item,index) in newsList"
        :key="index"
        :src="item.News_images"
        :title="item.News_title"
        :count="item.News_count"
        :content="item.News_content"
        :cate="item.News_style"
        class="article"/>
    </div>
  </div>
</template>

<script>
"use strict";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Article from "@/components/Article";

export default {
  name: "Search",
  components: {
    Header,
    Footer,
    Article
  },
  data () {
    return {
      newsList: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      const config = this.$path.search;
      config.params = {content: this.$route.query.content};
      this.$http(config).then((result) => {
        const {code, data} = result;
        if (code === "0") {
          this.newsList = data;
        }
      })
    }
  }
};
</script>

<style scoped lang="stylus">
.search
  height 100vh
</style>

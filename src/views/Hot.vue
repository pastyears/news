<template>
  <div class="hot flex column">
    <Header title="热门"/>
    <div class="content flex-a"
    >
      <Article
        v-for="(item,index) in newsList"
        :key="index"
        :src="item.News_images"
        :title="item.News_title"
        :count="item.News_count"
        :id="item.News_id"
        :content="item.News_content"
        :cate="item.News_style"
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
import GetList from "@/mixins/getList";
export default {
  name: "Hot",
  mixins: [GetList],
  components: {
    Header,
    Footer,
    Article
  },
  data() {
    return {
      newsList: [],
      page: 1,
      size: 5
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      const config = this.$path.list;
      config.params = {
        cate: this.$route.meta.cate,
        size: this.size,
        page: this.page
      };
      return this.$http(config).then(result => {
        const { code, data } = result;
        if (code === "0") {
          this.newsList = data;
        }
      });
    }
  }
};
</script>

<style scoped lang="stylus">
.hot {
  position: relative;
  height: 100vh;
}

.content {
  box-sizing: border-box;
  overflow: auto;

  .article, &:nth-child(n+1) {
    border-top: 1px solid #ecebeb;
  }
}
</style>

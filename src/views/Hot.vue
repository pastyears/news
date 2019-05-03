<template>
  <div class="hot">
    <Header title="热门"/>
    <div class="content">
      <Article
        v-for="(item,index) in newsList"
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
      const config = this.$path.list;
      config.params = { cate: this.$route.meta.cate };
      return this.$http(config).then((result) => {
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
.content
  box-sizing border-box
  padding-top 4.5rem
  overflow auto
</style>

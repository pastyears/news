<template>
  <div class="hot flex column">
    <Header title="收藏"/>
    <div class="content flex-a"
    v-infinite-scroll="getList"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="1"
      >
      <div class="none" v-if="newsList.length<=0">
        <img src="@/common/images/none.jpg"/>  
      </div>
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
    <Footer />
  </div>
</template>
<script>
"use strict";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Article from "@/components/Article";

export default {
  name: "collection",
  components: {
    Header,
    Footer,
    Article
  },
  data () {
    return {
      newsList: [] ,
      page: 1,
      size: 5
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      const config = this.$path.collect;
      config.params = {
        User_id:this.$local.fetch('news').User_id,
        size: this.size,
        page: this.page
      };
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
.hot
  position relative
  height 100vh
  .none
    position absolute; 
    z-index -1
    left 0px
    top 0px
    width 100%
    height 100%
    img
      width 100%
      height 100%
.collection
  position relative
  height 100vh
.content
  box-sizing border-box
  overflow auto
.article
  &:nth-child(n+1)
    border-top 1px solid #ecebeb
</style>

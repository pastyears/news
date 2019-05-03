<template>
  <div class="hot">
    <Header title="热门"/>
    <div class="content">
      <Article
<<<<<<< HEAD
        v-for="(item,index) in newsList"
=======
        v-for="(item,index) in 20"
>>>>>>> c1406a78b6db8339d710939c0a8f1f6ca51c994d
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
<<<<<<< HEAD
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
=======
>>>>>>> c1406a78b6db8339d710939c0a8f1f6ca51c994d
  }
};
</script>

<style scoped lang="stylus">
.content
<<<<<<< HEAD
  box-sizing border-box
  padding-top 4.5rem
=======
>>>>>>> c1406a78b6db8339d710939c0a8f1f6ca51c994d
  overflow auto
</style>

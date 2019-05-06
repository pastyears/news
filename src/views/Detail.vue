<template>
  <div class="detail">
    <Header title="详情"/>
    <div
      v-html="detail"
      class="content">
    </div>
  </div>
</template>

<script>
"use strict";
import Header from "@/components/Header";
export default {
  name: "Detail",
  components: {
    Header
  },
  data () {
    return {
      detail: ''
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    getDetail () {
      const config = this.$path.detail;
      const {cate, name} = this.$route.query
      config.params = { cate, name };
      this.$http(config).then((result) => {
          this.detail = result
      })
    }
  }
};
</script>

<style scoped lang="stylus">
.content
  box-sizing border-box
  margin 0 13px
  padding-top 4.5rem
  overflow auto
  font-size 160%
</style>

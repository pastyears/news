<template>
  <div class="detail">
    <Header
      title="详情"
      :tip="Collect"
      @handle="addCollect"/>
    <div
      v-html="detail"
      class="content">
    </div>
    <div class="content">
      <button class="collect"  @click="addCollect" v-html="Collect">
      收藏新闻
      </button>
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
  data() {
    return {
      detail: "",
      Collect: "收藏新闻"
    };
  },
  created() {
    this.getDetail();
    // 已收藏
    this.isCollect();
  },
  methods: {
    getDetail() {
      const config = this.$path.detail;
      const { cate, name } = this.$route.query;
      config.params = { cate, name };
      this.$http(config).then(result => {
        this.detail = result;
      });
    },
    isCollect() {
      const config = this.$path.isCollect;
      config.params = {
        User_id: this.$local.fetch("news").User_id,
        News_id: this.$route.query.id
      };
      this.$http(config).then(result => {
        if (result.code === "0") {
          this.Collect = result.msg;
        }
      });
    },
    addCollect() {
      if (this.Collect == "收藏新闻") {
        const config = this.$path.addCollect;
        config.params = {
          User_id: this.$local.fetch("news").User_id,
          News_id: this.$route.query.id
        };
        this.$http(config).then(result => {
          if (result.code === "0") {
            this.Collect = result.msg;
          }
        });
      } else {
        const config = this.$path.deleteCollect;
        config.params = {
          User_id: this.$local.fetch("news").User_id,
          News_id: this.$route.query.id
        };
        this.$http(config).then(result => {
          if (result.code === "0") {
            this.Collect = result.msg;
          }
        });
      }
    }
  }
};
</script>

<style scoped lang="stylus">
.detail {
  .content {
    padding: 13px;
    box-sizing: border-box;
    .collect {
      margin-top: 2rem;
      width: 100%;
      height: 4rem;
      color: #ffffff;
      font-size: 1.8rem;
      border-radius: 4.5rem;
      background: #ff859c;
    }
  }
}
</style>

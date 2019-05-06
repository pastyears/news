<template>
  <div class="home flex column">
    <div class="header">
      <VSearch />
      <VMenu />
    </div>
    <Banner class="banner"/>
    <router-view class="view flex-a"/>
    <VFooter />
  </div>
</template>
<script>
import VSearch from "@/components/Search";
import VMenu from "@/components/Menu";
import Banner from "@/components/Banner";
import VFooter from "@/components/Footer";
export default {
  name: "home",
  components: {
    VSearch,
    VMenu,
    Banner,
    VFooter
  },
  data () {
    return {
      bannerList: []
    }
  },
  created () {
    this.getBannerInfo()
  },
  methods: {
    getBannerInfo () {
      const config = this.$path.get_banner
      return this.$http(config).then((data) => {
        this.bannerList = data
      })
    }
  }
};
</script>

<style scoped lang="stylus">
.home
  position relative
  height 100vh
  overflow hidden
.view
  background #ffffff
  overflow auto
</style>

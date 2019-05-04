<template>
  <div class="home">
    <header class="header">
      <VSearch />
      <VMenu />
    </header>
    <router-view class="view"/>
    <VFooter />
  </div>
</template>
<script>
import VSearch from "@/components/Search";
import VMenu from "@/components/Menu";
import VFooter from "@/components/Footer";
export default {
  name: "home",
  components: {
    VSearch,
    VMenu,
    VFooter
  }
};
</script>

<style scoped lang="stylus">
.header
  position fixed
  top 0
  z-index 10
  width 100%
  max-width 750px;
  height 10rem
  background #ffffff
.view
  position absolute
  top 10rem
  bottom 4rem
  background #ffffff
  overflow auto
</style>

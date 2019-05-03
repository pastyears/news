<template>
  <div class="home">
    <header class="header">
      <VSearch />
      <VMenu />
    </header>
<<<<<<< HEAD
    <router-view class="view"/>
=======
    <router-view
      class="view"/>
>>>>>>> c1406a78b6db8339d710939c0a8f1f6ca51c994d
    <VFooter />
  </div>
</template>
<script>
import VSearch from "@/components/Search";
import VMenu from "@/components/Menu";
import VFooter from "@/components/Footer";
import axios from "axios"
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
</style>

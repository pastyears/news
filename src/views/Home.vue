<template>
  <div class="home">
    <VSearch />
    <VMenu />
    <router-view
      class="view"/>
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
.view
  padding-bottom 5rem
</style>

<template>
  <div class="mine flex column">
    <Header title="个人中心"/>
    <div class="content flex-a">
      <div class="main">
        <div class="bg">
          <img src="@/common/images/timg.jpg" alt="">
          <div class="username" >账户:
            <span v-html="username">
            </span>
          </div>
        </div>
          <router-link class="collect"   to="/collection">
            个人收藏
          </router-link>
        <div class="collect">
          修改资料
        </div>
      </div>
      <div class="out">
        <button @click="logout()" class="logout">
          退出登录
        </button>
      </div>
    </div>
    <VFooter />
  </div>
</template>

<script>
"use strict";
import Header from "@/components/Header";
import VFooter from "@/components/Footer";
export default {
  name: "Mine",
  components: {
    Header,
    VFooter
  },
  data() {
    return {
      username: ""
    };
  },
  created() {
    this.username = this.$local.fetch("news").User_name;
  },
  methods: {
    logout() {
      this.$local.remove("news")
      this.$router.push({
        path: "/login",
        replace: true,
        query: {
          redirect: this.$route.path.slice(1)
        }
      })
    }
  }
};
</script>
<style scoped lang="stylus">
.mine {
  height: 100vh;

  .content {
    .out {
      padding: 0 13px;
      box-sizing: border-box;

      .logout {
        margin-top: 2rem;
        width: 100%;
        height: 4rem;
        color: #ffffff;
        font-size: 1.8rem;
        border-radius: 4.5rem;
        background: #ff859c;
      }
    }

    .collect {
      width: 100%;
      display: block;
      height: 4rem;
      color: #333;
      font-size: 1.8rem;
      padding: 0 2rem;
      box-sizing: border-box;
      line-height: 4rem;
      background: #fff;
      border: 1px solid #dcdcdc;
    }

    .bg {
      width: 100%;
      height: 16rem;
      background: #ff85 9;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .username {
        position: absolute;
        top: 4rem;
        left: 2rem;
        font-size: 1.8rem;
        color: #fff;
      }
    }
  }
}
</style>

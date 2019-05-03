export default {
  data () {
    return {
      bannerList: [],
      newsList: []
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.$http([this.getBannerInfo(), this.getList()])
      .then(result => {
        this.bannerList = result[0]
        this.newsList = result[1]
      })
    },
    getBannerInfo () {
      const config = this.$path.get_banner
      return this.$http(config).then((data) => {
        return data;
      })
    },
    getList () {
      const config = this.$path.list;
      config.params = { cate: this.$route.meta.cate };
      return this.$http(config).then((result) => {
        const {code, data} = result;
        if (code === "0") {
          return data;
        }
        return result;
      })
    }
  }
}
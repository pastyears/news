export default {
  data () {
    return {
      bannerList: [],
      newsList: [],
      page: 1,
      size:10
    }
  },
  methods: {
    getList () {
      const config = this.$path.list;
      config.params = {
        cate: this.$route.meta.cate,
        size: this.size,
        page: this.page
      };
      this.$http(config).then((result) => {
        const {code, data} = result;
        if (code === "0") {
          this.newsList = [...this.newsList, ...data]
          this.page++
        }
      })
    }
  }
}
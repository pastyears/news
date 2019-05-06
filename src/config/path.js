const path = {
  get_banner: {
    method: "get",
    url: "/api/get_banner"
  },
  login: {
    method: "post",
    url: "/api/login"
  },
  list: {
    method: "get",
    url: "/api/list"
  },
  detail: {
    method: "post",
    url: "/api/detail"
  },
  search: {
    method: "get",
    url: "/api/search"
  }
}

export default {
  install (vm) {
    vm.prototype.$path = path
  }
}

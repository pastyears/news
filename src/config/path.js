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
  },
  register:{
    method: "get",
    url: "/api/register"
  },
  collect:{
    method: "get",
    url: "/api/collect"
  },
  addCollect:{
    method: "get",
    url: "/api/addcollect"
  },
  isCollect:{
    method: "get",
    url: "/api/iscollect"
  },
  deleteCollect:{
    method: "get",
    url: "/api/deletecollect"
  },
}

export default {
  install (vm) {
    vm.prototype.$path = path
  }
}

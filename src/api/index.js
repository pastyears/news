import axios from 'axios'
// import qs from 'qs'

axios.interceptors.response.use((res) => {
  let {status, data} = res
  if (status !== 200) {
    return res
  }
  return data
})

const $http = (data) => {
  let {url, method, params} = data
  if (!method) {
    return axios.all(data)
  }
  if (data.method === 'get') {
    params = {params: {...params}}
  }
  return axios[method](url, params)
}

export default {
  install (vm) {
    vm.prototype.$http = $http
  }
}

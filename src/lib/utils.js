const local = {
  save (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  fetch (key) {
    return JSON.parse(localStorage.getItem(key)) || {}
  },
  remove (key) {
    localStorage.removeItem(key)
  } 
}

const session = {
  save (key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  },
  fetch (key) {
    return JSON.parse(sessionStorage.getItem(key)) || {}
  },
  remove (key) {
    sessionStorage.removeItem(key)
  } 
}

export default {
  install: function (vm) {
    vm.prototype.$local = local
    vm.prototype.$session = session
  }
}

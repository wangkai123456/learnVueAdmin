import Vue from "vue"
import formatDate from "./format-date"
const filters = {
  formatDate,
}
// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.prototype.$filters = filters
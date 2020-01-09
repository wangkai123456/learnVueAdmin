import Vue from "vue"

// 存放接口名
const urlDict = {
  // 登录
  login: "/account/login"
}

// 导出对应的方法
export default {
  login: (data) => Vue.axios.post(urlDict.login, data),
}

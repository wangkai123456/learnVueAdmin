import Vue from "vue"

const components = {
  SideNavigationBar: () => import("./SideNavigationBar"),
}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})

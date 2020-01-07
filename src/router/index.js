import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  routes: [{
    path: '/SignIn',
    name: 'SignIn',
    component: () => import('@/pages/SignIn.vue')
  },
  {
    path: '/main',
    name: 'Main',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/pages/Main.vue'),
    redirect: {
      name: 'home'
    },
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/pages/Main/Home.vue")
      },
      {
        path: "/A1",
        name: "A1",
        component: () => import("@/pages/Main/A1.vue")
      },
      {
        path: "/A2",
        name: "A2",
        component: () => import("@/pages/Main/A2.vue")
      },
      {
        path: "/B1",
        name: "B1",
        component: () => import("@/pages/Main/B1.vue")
      },
      {
        path: "/B2",
        name: "B2",
        component: () => import("@/pages/Main/B2.vue")
      },
    ]
  },
  {
    path: '*',
    redirect: {
      name: 'SignIn'
    }
  }
  ]
})

export default router
import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _449f466a = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _715d6fc9 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _36a33cc5 = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages_posts_index" */))
const _a581cb3e = () => interopDefault(import('..\\pages\\admin\\auth\\index.vue' /* webpackChunkName: "pages_admin_auth_index" */))
const _077696bc = () => interopDefault(import('..\\pages\\admin\\new-post\\index.vue' /* webpackChunkName: "pages_admin_new-post_index" */))
const _7ec3c59e = () => interopDefault(import('..\\pages\\admin\\_postId\\index.vue' /* webpackChunkName: "pages_admin__postId_index" */))
const _2b054375 = () => interopDefault(import('..\\pages\\posts\\_id\\index.vue' /* webpackChunkName: "pages_posts__id_index" */))
const _cf4ebac8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/about",
      component: _449f466a,
      name: "about"
    }, {
      path: "/admin",
      component: _715d6fc9,
      name: "admin"
    }, {
      path: "/posts",
      component: _36a33cc5,
      name: "posts"
    }, {
      path: "/admin/auth",
      component: _a581cb3e,
      name: "admin-auth"
    }, {
      path: "/admin/new-post",
      component: _077696bc,
      name: "admin-new-post"
    }, {
      path: "/admin/:postId",
      component: _7ec3c59e,
      name: "admin-postId"
    }, {
      path: "/posts/:id",
      component: _2b054375,
      name: "posts-id"
    }, {
      path: "/",
      component: _cf4ebac8,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}

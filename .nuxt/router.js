import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6aad1960 = () => interopDefault(import('../src/pages/search.vue' /* webpackChunkName: "pages/search" */))
const _416ee6d7 = () => interopDefault(import('../src/pages/watch.vue' /* webpackChunkName: "pages/watch" */))
const _5152b01a = () => interopDefault(import('../src/pages/watch/index.vue' /* webpackChunkName: "pages/watch/index" */))
const _2221f102 = () => interopDefault(import('../src/pages/watch/_id.vue' /* webpackChunkName: "pages/watch/_id" */))
const _2207915a = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))
const _55142c5d = () => interopDefault(import('../src/pages/index/index.vue' /* webpackChunkName: "pages/index/index" */))
const _355c5198 = () => interopDefault(import('../src/pages/index/about.vue' /* webpackChunkName: "pages/index/about" */))
const _4fe04669 = () => interopDefault(import('../src/pages/index/achievements.vue' /* webpackChunkName: "pages/index/achievements" */))
const _3442d501 = () => interopDefault(import('../src/pages/index/certificates.vue' /* webpackChunkName: "pages/index/certificates" */))
const _6bf0deb3 = () => interopDefault(import('../src/pages/index/education.vue' /* webpackChunkName: "pages/index/education" */))
const _a5430622 = () => interopDefault(import('../src/pages/index/experience.vue' /* webpackChunkName: "pages/index/experience" */))
const _424c6982 = () => interopDefault(import('../src/pages/index/projects.vue' /* webpackChunkName: "pages/index/projects" */))
const _f7351372 = () => interopDefault(import('../src/pages/index/skills.vue' /* webpackChunkName: "pages/index/skills" */))
const _cf0e5b32 = () => interopDefault(import('../src/pages/_.vue' /* webpackChunkName: "pages/_" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/search",
    component: _6aad1960,
    name: "search"
  }, {
    path: "/watch",
    component: _416ee6d7,
    children: [{
      path: "",
      component: _5152b01a,
      name: "watch"
    }, {
      path: ":id",
      component: _2221f102,
      name: "watch-id"
    }]
  }, {
    path: "/",
    component: _2207915a,
    children: [{
      path: "",
      component: _55142c5d,
      name: "index"
    }, {
      path: "about",
      component: _355c5198,
      name: "index-about"
    }, {
      path: "achievements",
      component: _4fe04669,
      name: "index-achievements"
    }, {
      path: "certificates",
      component: _3442d501,
      name: "index-certificates"
    }, {
      path: "education",
      component: _6bf0deb3,
      name: "index-education"
    }, {
      path: "experience",
      component: _a5430622,
      name: "index-experience"
    }, {
      path: "projects",
      component: _424c6982,
      name: "index-projects"
    }, {
      path: "skills",
      component: _f7351372,
      name: "index-skills"
    }]
  }, {
    path: "/*",
    component: _cf0e5b32,
    name: "all"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

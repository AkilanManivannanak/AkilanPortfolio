import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../src/layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_272250ea from 'nuxt_plugin_plugin_272250ea' // Source: ./composition-api/plugin.mjs (mode: 'all')
import nuxt_plugin_pluginutils_7196d2e2 from 'nuxt_plugin_pluginutils_7196d2e2' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_1d2e2fad from 'nuxt_plugin_pluginrouting_1d2e2fad' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_0a7fa2e2 from 'nuxt_plugin_pluginmain_0a7fa2e2' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_portalvue_297fd37a from 'nuxt_plugin_portalvue_297fd37a' // Source: ./portal-vue.js (mode: 'all')
import nuxt_plugin_googleanalytics_3c4e060d from 'nuxt_plugin_googleanalytics_3c4e060d' // Source: ./google-analytics.js (mode: 'client')
import nuxt_plugin_workbox_47fe3755 from 'nuxt_plugin_workbox_47fe3755' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_19e95968 from 'nuxt_plugin_metaplugin_19e95968' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_1e90fedc from 'nuxt_plugin_iconplugin_1e90fedc' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_globalplugin_5df61bf6 from 'nuxt_plugin_globalplugin_5df61bf6' // Source: ../src/plugins/global.plugin.ts (mode: 'all')
import nuxt_plugin_mountedplugin_002ade6e from 'nuxt_plugin_mountedplugin_002ade6e' // Source: ../src/plugins/mounted.plugin.ts (mode: 'client')
import nuxt_plugin_constantsplugin_4e8683f6 from 'nuxt_plugin_constantsplugin_4e8683f6' // Source: ../src/plugins/constants.plugin.ts (mode: 'all')
import nuxt_plugin_toastsplugin_7402064e from 'nuxt_plugin_toastsplugin_7402064e' // Source: ../src/plugins/toasts.plugin.ts (mode: 'all')
import nuxt_plugin_i18nplugin_39979f80 from 'nuxt_plugin_i18nplugin_39979f80' // Source: ../src/plugins/i18n.plugin.ts (mode: 'all')
import nuxt_plugin_nuxttypedrouterplugin_5fbfee8c from 'nuxt_plugin_nuxttypedrouterplugin_5fbfee8c' // Source: ../src/plugins/nuxt-typed-router.plugin.ts (mode: 'all')
import nuxt_plugin_serviceworkerplugin_72b9cdae from 'nuxt_plugin_serviceworkerplugin_72b9cdae' // Source: ../src/plugins/serviceworker.plugin.ts (mode: 'client')
import nuxt_plugin_libnuxtclientinitpluginclient7c90d044_33bcb67b from 'nuxt_plugin_libnuxtclientinitpluginclient7c90d044_33bcb67b' // Source: ./lib.nuxt-client-init.plugin.client.7c90d044.js (mode: 'client')
import nuxt_plugin_meta_22a5cd46 from 'nuxt_plugin_meta_22a5cd46' // Source: ./composition-api/meta.mjs (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext)
  const router = await createRouter(ssrContext, config, { store })

  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":undefined,"titleTemplate":"%s | undefined v0.4.3","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1"},{"hid":"description","name":"description","content":"Portfolio website of Akilan Manivannan"},{"hid":"og:title","property":"og:title","content":"undefined v0.4.3"},{"hid":"og:locale","property":"og:locale","content":"fr_FR"},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"og:description","property":"og:description","content":"Portfolio website of Akilan Manivannan"},{"hid":"og:site_name","property":"og:site_name","content":undefined},{"hid":"og:url","property":"og:url","content":undefined},{"hid":"og:image","property":"og:image","content":"undefined\u002Fvicflix.png"}],"link":[{"rel":"icon","type":"image\u002Fpng","sizes":"64x64","href":"\u002Ficons\u002Ffavicon-64x64.png?v=1771786959"},{"rel":"icon","type":"image\u002Fpng","sizes":"32x32","href":"\u002Ficons\u002Ffavicon-32x32.png?v=1771786959"},{"rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002Ficons\u002Ffavicon-16x16.png?v=1771786959"},{"rel":"shortcut icon","type":"image\u002Fpng","href":"\u002Ffavicon-a.png?v=1771786959"},{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico?v=1771786959"},{"rel":"apple-touch-icon","sizes":"180x180","href":"\u002Ficons\u002Fapple-touch-icon.png?v=1771786959"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_272250ea === 'function') {
    await nuxt_plugin_plugin_272250ea(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_7196d2e2 === 'function') {
    await nuxt_plugin_pluginutils_7196d2e2(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_1d2e2fad === 'function') {
    await nuxt_plugin_pluginrouting_1d2e2fad(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_0a7fa2e2 === 'function') {
    await nuxt_plugin_pluginmain_0a7fa2e2(app.context, inject)
  }

  if (typeof nuxt_plugin_portalvue_297fd37a === 'function') {
    await nuxt_plugin_portalvue_297fd37a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_3c4e060d === 'function') {
    await nuxt_plugin_googleanalytics_3c4e060d(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_47fe3755 === 'function') {
    await nuxt_plugin_workbox_47fe3755(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_19e95968 === 'function') {
    await nuxt_plugin_metaplugin_19e95968(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_1e90fedc === 'function') {
    await nuxt_plugin_iconplugin_1e90fedc(app.context, inject)
  }

  if (typeof nuxt_plugin_globalplugin_5df61bf6 === 'function') {
    await nuxt_plugin_globalplugin_5df61bf6(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_mountedplugin_002ade6e === 'function') {
    await nuxt_plugin_mountedplugin_002ade6e(app.context, inject)
  }

  if (typeof nuxt_plugin_constantsplugin_4e8683f6 === 'function') {
    await nuxt_plugin_constantsplugin_4e8683f6(app.context, inject)
  }

  if (typeof nuxt_plugin_toastsplugin_7402064e === 'function') {
    await nuxt_plugin_toastsplugin_7402064e(app.context, inject)
  }

  if (typeof nuxt_plugin_i18nplugin_39979f80 === 'function') {
    await nuxt_plugin_i18nplugin_39979f80(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxttypedrouterplugin_5fbfee8c === 'function') {
    await nuxt_plugin_nuxttypedrouterplugin_5fbfee8c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_serviceworkerplugin_72b9cdae === 'function') {
    await nuxt_plugin_serviceworkerplugin_72b9cdae(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_libnuxtclientinitpluginclient7c90d044_33bcb67b === 'function') {
    await nuxt_plugin_libnuxtclientinitpluginclient7c90d044_33bcb67b(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_22a5cd46 === 'function') {
    await nuxt_plugin_meta_22a5cd46(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }

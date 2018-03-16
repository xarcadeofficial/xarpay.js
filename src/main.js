// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'typeface-roboto/index.css'

import jQuery from 'jquery'

import store from '@/store/store'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

global.jQuery = jQuery
require('bootstrap')
require('bootstrap/dist/css/bootstrap.min.css')

sync(store, router)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.isUserLoggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: 'xarpay',
  router,
  store,
  components: { App },
  template: '<App/>'
})

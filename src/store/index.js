import { createStore } from 'vuex'

import auth from './modules/auth'
import feed from './modules/feed'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    feed
  }
})

import { createStore } from 'vuex'

import auth from './modules/auth'
import feed from './modules/feed'
import popularTags from './modules/popularTags'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    feed,
    popularTags
  }
})

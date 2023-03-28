import { createStore } from 'vuex'

import auth from './modules/auth'
import feed from './modules/feed'
import popularTags from './modules/popularTags'
import article from './modules/article'
import createArticle from './modules/createArticle'
import editArticle from './modules/editArticle'
import settings from './modules/settings'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    feed,
    popularTags,
    article,
    createArticle,
    editArticle,
    settings
  }
})

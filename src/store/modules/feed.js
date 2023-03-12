import feedApi from "@/api/feed";

const state = {
  data: null,
  isLoading: false,
  errors: null
}

export const mutationsTypes = {
  getFeedStart: "[feed] get feed start",
  getFeedSuccess: "[feed] get feed success",
  getFeedFailure: "[feed] get feed failure",
}

export const actionsTypes = {
  getFeed: "[feed] get feed"
};

const mutations = {
  [mutationsTypes.getFeedStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationsTypes.getFeedSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationsTypes.getFeedFailure](state) {
    state.isLoading = false;
  }
};



const actions = {
  [actionsTypes.getFeed](context, {
    apiUrl
  }) {
    return new Promise((resolve) => {
      context.commit(mutationsTypes.getFeedStart);
      feedApi.getFeed(apiUrl)
        .then((response) => {
          context.commit(mutationsTypes.getFeedSuccess, response.data);
          resolve(response.data);
        })
        .catch(() => {
          context.commit(mutationsTypes.getFeedFailure);
        });
    });
  }
};
export default {
  state,
  mutations,
  actions
};
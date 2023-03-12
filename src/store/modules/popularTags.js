import popularTagApi from "@/api/popularTags";

const state = {
    data: null,
    isLoading: false,
    errors: null
}

export const mutationsTypes = {

    getPopularTagsStart: "[PopularTags] get PopularTags start",
    getPopularTagsSuccess: "[PopularTags] get PopularTags success",
    getPopularTagsFailure: "[PopularTags] get PopularTags failure",
}

export const actionsTypes = {
    getPopularTags: "[PopularTags] get PopularTags"
};

const mutations = {
    [mutationsTypes.getPopularTagsStart](state) {
        state.isLoading = true;
        state.data = null;
    },
    [mutationsTypes.getPopularTagsSuccess](state, payload) {
        state.isLoading = false;
        state.data = payload;
    },
    [mutationsTypes.getPopularTagsFailure](state) {
        state.isLoading = false;
    }
};

const actions = {
    [actionsTypes.getPopularTags](context) {
        return new Promise((resolve) => {
            context.commit(mutationsTypes.getPopularTagsStart);
            popularTagApi.getPopularTags()
                .then((tags) => {
                    context.commit(mutationsTypes.getPopularTagsSuccess, tags);
                    resolve(tags);
                })
                .catch(() => {
                    context.commit(mutationsTypes.getPopularTagsFailure);
                });
        });
    }
};
export default {
    state,
    mutations,
    actions
};
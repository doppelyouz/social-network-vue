import userProfileApi from "@/api/userProfile";

const state = {
    data: null,
    isLoading: false,
    errors: null
}

export const mutationsTypes = {
    getUserProfileStart: "[UserProfile] UserProfile start",
    getUserProfileSuccess: "[UserProfile] UserProfile success",
    getUserProfileFailure: "[UserProfile] UserProfile failure",
}

export const actionsTypes = {
    getUserProfile: "[UserProfile] Get UserProfile"
};

const mutations = {
    [mutationsTypes.getUserProfileStart](state) {
        state.isLoading = true;
        state.data = null;
    },
    [mutationsTypes.getUserProfileSuccess](state, payload) {
        state.isLoading = false;
        state.data = payload;
    },
    [mutationsTypes.getUserProfileFailure](state) {
        state.isLoading = false;
    }
};

const actions = {
    [actionsTypes.getUserProfile](context, {slug}) {
        return new Promise((resolve) => {
            context.commit(mutationsTypes.getUserProfileStart);
            userProfileApi.getUserProfile(slug)
                .then((profile) => {
                    context.commit(mutationsTypes.getUserProfileSuccess, profile);
                    resolve(profile);
                })
                .catch(() => {
                    context.commit(mutationsTypes.getUserProfileFailure);
                });
        });
    }
};
export default {
    state,
    mutations,
    actions
};
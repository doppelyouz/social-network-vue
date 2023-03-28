import { mutationsTypes as authMutationsTypes } from "./auth"

const state = {
    isSubmitting:false,
    validationErrors: null
}

const mutations = {
    [authMutationsTypes.updateCurrentUserStart](state) {
        state.isSubmitting = true;
        state.validationErrors = null;
    },
    [authMutationsTypes.updateCurrentUserSuccess](state) {
        state.isSubmitting = false;
    },
    [authMutationsTypes.updateCurrentUserFailure](state, payload) {
        state.isSubmitting = false;
        state.validationErrors = payload;
    },
}

export default {
    state, mutations
};
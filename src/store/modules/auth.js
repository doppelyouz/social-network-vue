import authApi from '@/api/auth';
import {setItem} from '@/helpers/persistanceStorage'
  
const state = {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
}

export const mutationsTypes = {
    registerStart: '[auth] registerStart',
    registerSuccess: '[auth] registerSuccess',
    registerFailure: '[auth] registerFailure',
}

const mutations = {
    [mutationsTypes.registerStart](state) {
        state.isSubmitting = true;
        state.validationErrors = null;
    },
    [mutationsTypes.registerSuccess](state, payload) {
        state.isSubmitting = false;
        state.currentUser = payload;
        state.isLoggedIn = true;
    },
    [mutationsTypes.registerFailure](state, payload) {
        state.isSubmitting = false;
        state.validationErrors = payload;
    }
}

export const actionsTypes = {
    register: '[auth] register'
}

const actions = {
    [actionsTypes.register](context, credentials) {
        return new Promise(resolve => {
            context.commit(mutationsTypes.registerStart)
            authApi.register(credentials)
                    .then(response => {
                        context.commit(mutationsTypes.registerSuccess, response.data.user)
                        setItem('accessToken', response.data.user.token)
                        resolve(response.data.user)
                    })
                    .catch(result => {
                        context.commit(mutationsTypes.registerFailure, result.response.data.errors)
                    })
        })
    }
}

export default {
    state,
    mutations,
    actions
};
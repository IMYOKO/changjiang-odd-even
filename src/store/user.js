import apis from "@/request/index";

const state = {
    token: localStorage.getItem('token') || '',
    userInfo: {}
}

const mutations = {
    updateToken(state, token) {
        if (token) {
            localStorage.setItem('token', token)
        } else {
            localStorage.removeItem('token')
        }
        state.token = token
    },
    updateUserInfo(state, userInfo) {
        state.userInfo = userInfo
    }
}

const actions = {
    async login({ commit }, payload) {
        try {
            const res = await apis.login(payload)
            commit('updateToken', res.token)
            return Promise.resolve(res);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    async withdrawal({ commit }) {
        try {
            const res = await apis.withdrawal();
            commit('updateUserInfo', res)
            return Promise.resolve(res);
        } catch (error) {
            return Promise.reject(error);
        }
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
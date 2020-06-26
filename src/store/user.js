import apis from "@/api/apis";

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
    async login({ commit, dispatch }, payload) {
        try {
            const { token } = await apis.login(payload)
            commit('updateToken', token)
            dispatch('withdrawal')
        } catch (error) {
            console.log(error)
        }
    },
    async withdrawal({ commit }) {
        try {
            const userInfo = await apis.withdrawal()
            console.log(userInfo)
            commit('updateUserInfo', userInfo)
        } catch (error) {
            console.log(error)
        }
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
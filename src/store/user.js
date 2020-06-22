import apis from "@/serve/apis";

const state = {
    token: ''
}

const mutations = {
    updateToken(state, token) {
        state.token = token
    }
}

const actions = {
    async login({ commit }, payload) {
        try {
            const token = await apis.login(payload)
            commit('updateToken', token)
        } catch (error) {
            console.log(error)
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
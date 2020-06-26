const state = {
    loading: false
}

const mutations = {
    updateLoading(state, loading) {
        state.loading = loading
    }
}

const actions = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
export const state = () => ({
    auth: {
        loggedIn: false,
        user: null
    },
})

export const mutations = {
    setAuth(state, status) {
        state.auth.loggedIn = status
        this.$auth.$storage.setUniversal('mykey', status, false)
    },
    setUser(state, user) {
        state.auth.user = user
        this.$auth.$storage.setUniversal('myUser', user, false)
    }
}
export const actions = {
    nuxtServerInit({ commit }, { req }) {
        const key = this.$auth.$storage.getUniversal('mykey')
        commit('setAuth', key)
        const user = this.$auth.$storage.getUniversal('myUser')
        commit('setUser', user)
        // if (req.session) {
        //     $storage.getUniversal(key)
        //     commit('setUser', req.session.user)
        // }
    }
}

export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn
    },

    loggedInUser(state) {
        return state.auth.user
    }
}
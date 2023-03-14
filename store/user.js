export const state = () => ({
    user:[]
})

export const mutations = {
    setUser(state, data) {
        state.user = data
    }
}

export const actions = {
    async getUser({ commit }) {
        await this.$axios.get('/select-user')
            .then((data) => {
                commit('setUser', data.data)
        })
    },
    async createUser({ commit },data) {
        await this.$axios.post('/create-user', data)
            .then((data) => {
                console.log('create user successfully....');
            }).catch((error) => {
            console.log('create user error');
        })
    },
    async removeUser({ commit }, id) {
        await this.$axios.delete(`/user/${id}`)
            .then((data) => {
            console.log('delete this account successfully....');
        })
    }
}
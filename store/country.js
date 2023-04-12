export const state = () => ({
    country:[]
})

export const mutations = {
    setCountry(state, data) {
        state.country = data
    }
}

export const actions = {
    async getCountry({ commit }) {
        await this.$axios.get('https://restcountries.com/v3.1/all?fields=name,flags')
            .then((data) => {
                console.log(data.data);
                commit('setCountry',data.data)
        })
    }
}
export default function (context) {
    context.$axios.onRequest(config => {
        config.baseURL = context.$config.apiURL
        config.headers.common['Content-Type'] = 'application/json'
        config.headers.common['Accept'] = 'application/json'
        // config.headers.common.Authorization = 'token'
    })

    context.$axios.onError((error) => {
        console.log(error.response.status);
        if (error.response.status === 404) console.log(error.response);
        if (error.response.status === 403 || error.response.status === 401) {
            context.$router.push('/')
        }
    })
}
import axios from "axios"

const authEndpoint = 'https://accounts.spotify.com/authorize?'
const clientID = 'e74c6ffc27934222b28fc5a965f43b99'
const redirectUri = 'http://127.0.0.1:5173/'
const scopes = ['user-library-read','playlist-read-private']

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scopes=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`

const apiClient = axios.create({
    baseURL: ' https://api.spotify.com/v1/'
})

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function(config){
        config.headers.Authorization = 'Bearer ' + token
        return config
    })
}
export default apiClient
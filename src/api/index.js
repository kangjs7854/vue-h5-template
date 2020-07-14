import axios from 'axios'

let baseUrl

export default{
    getHome(params){
        return axios.get(baseUrl,params)
    }
}
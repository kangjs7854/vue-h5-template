import url from './urls'

export default{
    getUserInfo(params={}){
        return $http.post(url.getUerInfo,params)
    }
}
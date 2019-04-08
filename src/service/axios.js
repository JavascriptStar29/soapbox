import axios from 'axios'
import AuthService from './authService'
import * as Configs from '../configs'
import App from '../main'
var instance = axios.create({
    baseURL: Configs.baseURL
});

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    var token = AuthService.getAuthToken();
    if (token) {
        config.headers['Authorization'] = token;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    // Do something with response data
    
    return response;
  }, function (error) {
    var status = error.response.status;
    if(status == 401) {
        App.$router.push({name:'Login'});
    }
    // Do something with response error
    return Promise.reject(error);
  });

export default instance;
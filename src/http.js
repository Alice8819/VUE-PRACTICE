import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/'

axios.interceptors.response.use(response=>{
    if(response.status === 200){
        return response.data;
    }
})

axios.interceptors.request.use(request =>{
    request.url += '.json'

    return request
})

export default axios;
axios.defaults.baseURL = "https://developer.duyiedu.com/vue/bz";

axios.interceptors.response.use(response => {
    if(response.status === 200){
        return response.data
    }
})
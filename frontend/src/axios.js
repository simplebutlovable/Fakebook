import axios from 'axios';

const baseURL = 'http://192.168.254.158:8000/api/'


const axiosInstance = axios.create({
    baseURL : baseURL,
    timeout : 10000,
    headers : {
        Authorization : localStorage.getItem('access token')
        ? 'Bearer ' + localStorage.getItem('access token') : null,
        'Content-Type': 'application/json'
    },
});
/*
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Instance Respose", response)
    return response;
  },
  (error) => {
      console.log("Generating New Refresh Token")
    return new Promise((resolve) => {
      const originalRequest = error.config
      const refreshToken = localStorage.getItem('refresh token')
    
      if (error.response && error.response.status === 401 && error.config && !error.config.__isRetryRequest && refreshToken) {
        originalRequest._retry = true;
        
        const response = fetch('http://192.168.254.135:8000/api/token/refresh/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            refresh: refreshToken,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            localStorage.setItem('access token', res.access)
                error.config.headers.Authorization = "Bearer "+localStorage.getItem('access token');
                return axiosInstance(originalRequest);
          })
          .catch((err)=>{
              console.log("Error: ", err)
          })
          
        resolve(response)
      }

      return Promise.reject(error)
    })
  },
)
*/
export default axiosInstance;
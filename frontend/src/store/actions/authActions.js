import { FETCH_LOGIN,FETCH_USER_INFO, FETCH_SIGNUP } from './types';
import axiosInstance from '../../axios';



export const fetchLogin = (requestOptions) =>dispatch=>{    
        axiosInstance.post('token/',requestOptions)
        .then((res)=>{
            dispatch({
                type:FETCH_LOGIN,
                payload : res.data,
                flags : {
                    auth_flag : true,
                    fetch_flag : false,
                    error_flag : false
                }
            });
            localStorage.setItem('access token', res.data.access);
            localStorage.setItem('refresh token', res.data.refresh);        
            
            if( res.status === 200){
               window.location.reload();
            }
        })
        .catch((err)=>{
            dispatch({
                type:FETCH_LOGIN,
                flags : {
                    auth_flag : false,
                    fetch_flag : false,
                    error_flag : true
                }
                
            });
        })

};

export const fetchSignup = (requestOptions) =>dispatch=>{ 
    axiosInstance.post('register/',requestOptions)
    .then((res)=>{
        dispatch({
            type:FETCH_SIGNUP,
            payload : res.data
        });
       
        localStorage.setItem('access token', res.data.access);
        localStorage.setItem('refresh token', res.data.refresh);        
       
        if (res.status === 200){
            window.location.reload();
        }
        
    })
    .catch((err)=>{
        console.log("Invalid",err)
    })

};

export const fetchUserInfo = () =>dispatch=>{
       
        axiosInstance.get('user/')
        .then((res)=>{
                dispatch({
                    type:FETCH_USER_INFO,
                     payload : res.data.data
                })   
        })
        .catch((err)=>{
            console.log("Error",err)
            
        })     
      
};
import {FETCH_LOGIN, FETCH_USER_INFO,FETCH_SIGNUP } from '../actions/types';

const initialState = {
    userToken : {},
    flags : {
        auth_flag : false,
        fetch_flag :  false,
        error_flag : false
    },
    userInfo : {}
 
}


export default function(state = initialState, action){
    switch (action.type){

        case FETCH_LOGIN:
            console.log("LOGIN REDUCER", state);
            return {...state, 
                    userToken: action.payload,
                    flags : action.flags
                }
        
        case FETCH_USER_INFO:
            return {...state, userInfo:action.payload }

        case FETCH_SIGNUP:
            console.log("FETCH SIGNUP",state);
            return {...state, userToken: action.payload}
        default:
             return state;
    }
}
import { LOAD_PROFILE, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCESS, LOG_OUT } from "../actionType"

const initialState = {
    accessToken: sessionStorage.getItem('ytc-access-token')?sessionStorage.getItem('ytc-access-token'):null  ,
    user:sessionStorage.getItem('ytc-user')? JSON.parse(sessionStorage.getItem('ytc-user')): null ,
    loading : false
}

export const authReducer = (prevState = initialState, action) => {

    const { type, payload } = action                            //Destructuring data received from Action

    switch(type){
        case LOGIN_REQUEST:                                     //We'll request first from the auth server and make loading true
            return{                                             //to show a loading screen
                ...prevState, loading: true
            }
        case LOGIN_SUCESS :                                     //If we are able to successfully authenticate user from server    
            return{                                             //we will get an accesstoken from server, which is required to
                ...prevState,                                   //request videos from google servers.
                accessToken: payload,
                loading: false
            }
        case LOGIN_FAILURE :                                     //If we are unable to authenticate user we will not get any     
            return{                                              //accesstoken
                ...prevState,
                accessToken: null,
                loading: false,
                error: payload
            }
            case LOAD_PROFILE :                                  //If login is sucessfull we will get user details as payload
            return{
                ...prevState,
                user: payload
            }
            case LOG_OUT :                                       //When user log's out, we will make acesstoken & user to be null 
            return{
                ...prevState,
                accessToken: null,
                user: null
            }

        default :    
            return prevState
    }
}
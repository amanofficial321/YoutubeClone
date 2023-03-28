import auth from '../../firebase'
import firebase from 'firebase/compat/app'
import { LOAD_PROFILE, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCESS, LOG_OUT } from '../actionType';


export const login = () => async dispatch => {
    try{

        dispatch(
            {
                type: LOGIN_REQUEST                           
            }
        )

        const authProvider = new firebase.auth.GoogleAuthProvider();
        console.log('authProvider',authProvider);

        authProvider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')  //This scope is added to delete & add comments
                                                                                    //and likes.
        const res = await auth.signInWithPopup(authProvider);
        console.log('Response',res);

        const accessToken = res.credential.accessToken               //After successfull auth we'll get acesstoken,name,profile-pic
        const profile = {
            name : res.additionalUserInfo.profile.name,
            photoURL : res.additionalUserInfo.profile.picture
        }

        sessionStorage.setItem('ytc-access-token',accessToken)      //Putting accesstoken and userprofile data in session storage
        sessionStorage.setItem('ytc-user', JSON.stringify(profile) )//so that we not need to login again if something is opened in 
                                                                    //new tab.
        dispatch(
            {
                type: LOGIN_SUCESS,                                 //If login sucessfull we will store accesstoken in redux store
                payload: accessToken
            }
        )

        dispatch(
            {
                type: LOAD_PROFILE,                                 //We also store userprofile in our redux store
                payload: profile
            }
        )

    }catch (error){
        console.log('Error Message',error.message);                 //If authentication failed we'll store it as error message.
        dispatch(
            {
                type: LOGIN_FAILURE,
                payload: error.message
            }
        )
        
    }
}

export const logout = () => async dispatch => {
    await auth.signOut();

    dispatch(
        {
            type: LOG_OUT
        }
    )

    sessionStorage.removeItem('ytc-access-token')
    sessionStorage.removeItem('ytc-user')

}


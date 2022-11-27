import { async } from '@firebase/util';
import * as actions from './actionTypes';

//Sign Up Function
export const signUp = (userData)=>{
    return async(dispatch, firebase)=>{
        try{
            dispatch({type:actions.SIGN_UP_START});
            const {email, password} = userData;
            let username = "hello"
            //Here after comma you have to pass the values you want to store in firestore.
            let user = await firebase.createUser({email, password}, {email});
            dispatch({ type: actions.SIGN_UP_SUCCESS });
        }
        catch(e){
            dispatch({ type: actions.SIGN_UP_FAIL, payload: e });
        }
    }
}

//signIn with Google Function
export const signInWithGoogle = ()=>{
    return async(dispatch,firebase)=>{
        try{
            dispatch({type:actions.SIGN_IN_START});
            let user = await firebase.login({ provider: 'google', type: 'popup' });
            console.log("The user is", user);
            dispatch({ type: actions.SIGN_IN_SUCCESS });

        }
        catch(e){
            dispatch({ type: actions.SIGN_IN_FAIL, payload: e });
        }
    }
}

//sign In with Github
export const signInWithGithub = ()=>{
    return async(dispatch, firebase)=>{
        try{
            dispatch({ type: actions.SIGN_IN_START });
            let user = await firebase.login({provider:'github', type:'popup'});
            dispatch({ type: actions.SIGN_IN_SUCCESS });
        }
        catch(e){
            dispatch({ type: actions.SIGN_IN_FAIL, payload: e });
        }
        
    }
}
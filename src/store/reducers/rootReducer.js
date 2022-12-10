import React from 'react'
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import signInReducer from './signInReducer';
import signUpReducer from './signUpReducer';
import { combineReducers } from 'redux';
import {
    firebaseReducer
} from 'react-redux-firebase';

const rootReducer = combineReducers({
    authReducer: authReducer,
    profileReducer: profileReducer,
    firebaseReducer: firebaseReducer,
    signInReducer: signInReducer,
    signUpReducer: signUpReducer
})

export default rootReducer
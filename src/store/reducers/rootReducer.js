import React from 'react'
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import { combineReducers } from 'redux';
import {
    firebaseReducer
} from 'react-redux-firebase';

const rootReducer = combineReducers({
    authReducer: authReducer,
    profileReducer: profileReducer,
    firebaseReducer: firebaseReducer
})

export default rootReducer